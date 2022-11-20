import React from "react";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { db, storage } from "../../services/firebaseConfig";
import "./admin.css";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Admin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [linkImg, setLinkImg] = useState("");
  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();

    const docRef = collection(db, "posts");
    await addDoc(
      collection(docRef, {
        title: title,
        description: description,
        autor: "Ele",
        linkImg: "http://google.com",
      })
    );
  }

  return (
    <div className="contente">
      <form onSubmit={handleSubmit}>
        <div className="title">
          <p>
            Crie seu <span>post</span>
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Titulo</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Digite o titulo do post"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label htmlFor="exampleInputPassword1">Descrição</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Digite sua reflexão"
            value={description}
            maxLength="100000"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group ">
          <label className="form-file" htmlFor="exampleCheck1">
            Escolha sua imagem
          </label>
          <input
            type="file"
            className="form-file"
            placeholder={file}
            onChange={(e) => setFile(e.target.files[0])}
          />
          {!linkImg ? (
            <progress value={progress} max="100" />
          ) : (
            <img
              src={linkImg}
              alt="imagem"
              style={{ width: "200px", height: "100px" }}
            />
          )}
        </div>

        <button type="submit" className="btn">
          Enviar
        </button>
      </form>
    </div>
  );
}
