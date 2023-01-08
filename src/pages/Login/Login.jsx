import { useFormik } from "formik";

import { Navigate, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

import React, { useContext } from "react";
import { FiLogIn, FiArrowLeft } from "react-icons/fi";
import { useState, CSSProperties } from "react";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BlogContext } from "../../context/BlogContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [progress, setProgress] = useState(false);
  const navigation = useNavigate();
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const {
    setEmail: setEmails,
    setPassword: setPasswords,
    setIsLogin,
    setUser,
  } = useContext(BlogContext);
  async function LoginUser(e) {
    e.preventDefault();
    setProgress(true);

    try {
      await axios
        .get(
          `http://localhost:3000/login?email=${email.toLowerCase()}&password=${password.toLowerCase()}`
        )
        .then((response) => {
          console.log(response.data.data);
          if (response.data.sucess) {
            setIsLogin(true);
            setUser(response.data.data);
            setProgress(false);
            navigation("/admin", {
              user: {
                name: response.data.data,
              },
            });
          } else {
            setIsLogin(false);

            toast.error("Há erros em seus dados , verifique e tente novamente");
            setEmail("");
            setPassword("");
          }
        })
        .catch((err) => {
          toast.error("Há erros em seus dados , verifique e tente novamente");
          setIsLogin(false);
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="formLogin">
      <form className="formSubmit">
        <header className="header">
          <h3 className="title">
            Blog <span className="nameReformed"> Reformado</span>
          </h3>
          <span>
            <FiLogIn size={20} color="#53bb77" />
          </span>
        </header>
        <div className="form-group">
          <label className="title" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Digite o email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="title" htmlFor="password">
            Senha
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {progress ? (
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => LoginUser(e)}
          >
            Carregando...
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => LoginUser(e)}
          >
            Entrar
          </button>
        )}
        <a
          href="/"
          style={{
            color: "#ffff",
            textAlign: "center",
            fontWeight: "bold",
            opacity: "0.9",
          }}
        >
          <span style={{ marginRight: "5px" }}>
            <FiArrowLeft size={20} color="#53bb77" />
          </span>
          Voltar
        </a>
      </form>
      <ToastContainer />
    </div>
  );
}
