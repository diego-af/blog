import { useFormik } from "formik";
import { auth } from "../../services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as Yup from "yup";
import React from "react";
import { FiLogIn, FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { supabase } from "../../services/supase";

export function Login() {
  // const [inititValues, setIinitValues] = useState({

  //   email: "",
  //   password: "",
  // });
  // const formik = useFormik({
  //   enableReinitialize: true,
  //   initialValues: inititValues,
  //   validationSchema: Yup.object().shape({
  //     name: Yup.string().email().required("Email é obrigatório"),
  //     password: Yup.string()
  //       .min(5, "Senha Curta")
  //       .required("Senha é obrigatório"),
  //   }),
  //   onSubmit: (values) => {
  //     alert("Bem vindo");
  //   },
  // });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log(data);

    if (error) {
      toast.error("Verifique seu email e senha");
      return;
    }

    navigation("/admin");
  }
  return (
    <div className="formLogin">
      <form onSubmit={handleSubmit} className="formSubmit">
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
            className="form-control text-zinc-400"
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
            className="form-control text-zinc-400"
            id="exampleInputPassword1"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Entrar
        </button>
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
    </div>
  );
}
