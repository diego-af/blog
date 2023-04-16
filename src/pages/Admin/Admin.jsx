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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { supabase } from "../../services/supase";

export function Admin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [linkImg, setLinkImg] = useState("");
  const [file, setFile] = useState(null);
  const [autor, setAutor] = useState("");
  const [progress, setProgress] = useState(0);

  async function getFile(e) {
    setFile(e.target.files[0]);
    const imageFile = e.target.files[0];
    console.log(imageFile);

    const { data, error } = await supabase.storage
      .from("img")
      .upload(imageFile.name, imageFile);

    console.log(data);

    if (error) {
      toast.error("Não foi possivél terminar operação de escolha de imagem");
      return;
    }

    const url = await supabase.storage.from("img").getPublicUrl(data.path);
    console.log(url);
    setLinkImg(url.data.publicUrl);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let linkimg;
    const post = {
      title,
      description,
      linkimg: linkImg,
      autor,
    };
    const { data, error } = await supabase.from("post").insert([post]);
    if (error) {
      toast.error("Não possivel inserir seus dados. Tente Novamente");

      return;
    }

    toast.success("Pos enviado, obrigado por colaboar com o Reino de Deus");
    setTitle("");
    setDescription("");
    setLinkImg("");
    setFile(null);
    setAutor("");

    console.log(data);
  }

  return (
    <div className="contente">
      <form onSubmit={handleSubmit}>
        <div className="title">
          <p>
            Crie seu <span>post</span>
          </p>
        </div>
        <div className="form-group ">
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

        <button type="submit" className="btn mt-4">
          Enviar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
