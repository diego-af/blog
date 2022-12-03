import React from "react";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
  listAll,
  list,
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
  const [autor, setAutor] = useState("");
  const [progress, setProgress] = useState(0);

  function getFile(e) {
    setFile(e.target.files[0]);

    console.log(file);

    const pathImage = `images/${file.name}`;
    const imageRef = ref(storage, pathImage);

    const uploadTask = uploadBytesResumable(imageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setProgress(progress);
        alert("foi");
      },
      (error) => {
        alert(error);
      },
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        setLinkImg(url);
      })
    );

    console.log(linkImg);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const docRef = collection(db, "posts");

    const response = await addDoc(
      collection(docRef, {
        autor: autor,
        description: description,
        linkImg: linkImg,
        title: title,
      })
    );
    console.log(response);
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
            onChange={getFile}
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
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Autor</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Digite o nome do autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>

        <button type="submit" className="btn">
          Enviar
        </button>
      </form>
    </div>
  );
}
