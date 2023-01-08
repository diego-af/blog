import React, { useContext, useEffect, useState } from "react";
import "./index.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import { Link } from "react-router-dom";
import { BlogContext } from "../../context/BlogContext";

export function Home() {
  const { GetPost, post } = useContext(BlogContext);

  useEffect(() => {
    GetPost();
  }, []);

  console.log(post[0].tittle);
  return (
    <div className="content">
      <div className="main">
        {post.map((item) => {
          return (
            <div className="subMain mb-10">
              <div className="image">
                <img src={item.image} />
              </div>
              <div className="body">
                <div className="bodyContent">
                  <h3 style={{ color: "#ffff" }}>{item.tittle}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
