import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import {} from "react-icons";
import { Link } from "react-router-dom";

export function Details() {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [linkImg, setLinkImg] = useState("");
  const { id } = useParams();
  useEffect(() => {
    async function getPost() {
      const postRef = doc(db, "posts", id);

      await getDoc(postRef).then((snapshot) => {
        setTitle(snapshot.data().title);
        setDescription(snapshot.data().description);
        setLinkImg(snapshot.data().linkImg);
      });
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
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Why do we use it? It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters, as
                opposed to using 'Content here, content here', making it look
                like readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still
                in their infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose (injected humour and
                the like). Lorem Ipsum. Why do we use it? It is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </h3>
            </div>
            <hr style={{}} />
            <Link to="/" className="btn btn-success font-weigth-bold mt-3 mb-5">
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
