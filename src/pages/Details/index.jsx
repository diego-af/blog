import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import {} from "react-icons";
import { Link } from "react-router-dom";
import { supabase } from "../../services/supase";

export function Details() {
  const [post, setPost] = useState("");
  const [autor, setAutor] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [linkImg, setLinkImg] = useState("");
  const { id } = useParams();
  useEffect(() => {
    async function getPost() {
      const { data, error } = await supabase.from("post").select().eq("id", id);
      console.log(data[0]);
      // const postRef = doc(db, "posts", id);

      // await getDoc(postRef).then((snapshot) => {
      setTitle(data[0].title);
      setDescription(data[0].description);
      setLinkImg(data[0].linkimg);
      setLinkImg(data[0].linkimg);
      setAutor(data[0].autor);
      // });
    }

    getPost();
  }, []);
  return (
    <div className="allContainer">
      <div className="subContainer">
        <div className="downContainer">
          <div className="downImage">
            <img src={linkImg} />
          </div>
          <div className="bodyContainer">
            <div className="bodyTitle">
              <h3>{title}</h3>
            </div>

            <div className="bodyDescription">
              <h3> - {description} -</h3>
            </div>
            <hr style={{}} />
            <Link to="/" className="btn btn-success font-weigth-bold mt-3 mb-5">
              Voltar
            </Link>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <span style={{ color: "#ffffff", margin: "0px", padding: "10px" }}>
          Autor -
        </span>
        <span style={{ color: "#ffffff", margin: "0px", opacity: "0.7" }}>
          {autor}
        </span>
      </div>
    </div>
  );
}
