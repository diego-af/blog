import React, { useEffect, useState } from "react";
import "./index.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import { Link } from "react-router-dom";

export function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const postref = collection(db, "posts");
      await getDocs(postref).then((snapshot) => {
        let list = [];
        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            title: doc.data().title,
            linkImg: doc.data().linkImg,
            description: doc.data().description,
            autor: doc.data().autor,
          });
          setPost(list);
          console.log(list);
        });
      });
    }
    getPosts();
  }, []);

  return (
    <div className="content">
      <div className="main">
        {post.map((item) => (
          <div className="subMain mb-10" key={item.id}>
            <div className="image">
              <img src={item.linkImg} />
            </div>
            <div className="body">
              <div className="bodyContent">
                <h3>{item.title}</h3>
                <Link
                  to={`/details/${item.id}`}
                  className=" btn btn-success mt-3"
                >
                  Leia Sobre
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
