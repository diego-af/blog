import React, { useEffect, useState } from "react";
import "./index.css";
import { supabase } from "../../services/supase";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import { Link } from "react-router-dom";

export function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const { data, error } = await supabase.from("post").select();
      setPost(data);
      console.log(data);

      // const postref = collection(db, "posts");
      // await getDocs(postref).then((snapshot) => {
      //   let list = [];
      //   snapshot.forEach((doc) => {
      //     list.push({
      //       id: doc.id,
      //       title: doc.data().title,
      //       linkImg: doc.data().linkImg,
      //       description: doc.data().description,
      //       autor: doc.data().autor,
      //     });
      //     setPost(list);
      //     console.log(list);
      //   });
      // });
    }
    getPosts();
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="w-full grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3  max-lg:gap-4 gap-2 p-4  ">
        {post.map((item) => (
          <div
            className="w-80 max-lg:w-60 mb-4 flex flex-col gap-3 h-fit"
            key={item.id}
          >
            <div className="w-full h-40">
              <img src={item.linkimg} className="w-full h-full" />
            </div>
            <div className=" w-full flex ">
              <div className="w-full flex flex-col justify-start mt-2  gap-2">
                <h3 className="text-white/70">{item.title}</h3>
              </div>
            </div>

            <div className="w-full">
              <Link
                to={`/details/${item.id}`}
                className=" w-fit m-0 bg-green-600 p-2 rounded-lg text-white/90 hover:bg-green-700 mt-3"
              >
                Leia Sobre
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-8 right-6 bg-green-800 p-2 rounded-lg  ">
        <Link to="/admin">Criar post</Link>
      </div>
    </div>
  );
}
