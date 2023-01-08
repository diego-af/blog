import React, { useContext, useEffect } from "react";
import { Link, Navigate, useNavigate, useRoutes } from "react-router-dom";

import "./admin.css";
import { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { BlogContext } from "../../context/BlogContext";
import { ToastContainer, toast } from "react-toastify";

export function Admin(props) {
  const [tittle, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [linkImg, setLinkImg] = useState("");
  const [file, setFile] = useState();

  const [autorId, setAutorId] = useState();
  const [progress, setProgress] = useState(false);
  const { isLogin, user, handleSubmit } = useContext(BlogContext);
  const navigation = useNavigate();
  const [autor, setAutor] = useState(user.name);

  async function handle(tittle, description, file, autorId, e) {
    console.log(tittle, description, file, autorId);

    handleSubmit(tittle, description, file, autorId, e);
  }

  useEffect(() => {
    setAutor(user.name);
    setAutorId(user.id);
  });
  return (
    <>
      <div style={{ marginTop: "80px" }}>
        <div className="row mb-3">
          <div className="col-xl-6">
            <div className="form-group">
              <label className="form-label" style={{ color: "white" }}>
                {" "}
                Titulo
              </label>
              <input
                type="text"
                name="tittle"
                className="form-control"
                value={tittle}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-xl-6">
            <div className="form-group">
              <label className="form-label" style={{ color: "white" }}>
                {" "}
                Descrição
              </label>
              <textarea
                type="text"
                name="description"
                style={{ height: "300px" }}
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-xl-6">
            <div className="form-group">
              <label className="form-label" style={{ color: "white" }}>
                {" "}
                Imagem para o post
              </label>
              <input
                type="file"
                name="file"
                className="form-control"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-xl-6">
            <div className="form-group">
              <label className="form-label" style={{ color: "white" }}>
                {" "}
                Autor
              </label>
              <input
                type="text"
                name="autor"
                className="form-control"
                value={autor}
                disabled={true}
                style={{ cursor: "not-allowed" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
        }}
      >
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handle(tittle, description, file, autorId)}
        >
          Enviar post
        </button>
      </div>
    </>
  );
}
