import React, { createContext, ReactNode, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type LoginProps = {
  email: string;
  password: string;
};
interface IProps {
  children: ReactNode;
}

export const BlogContext = createContext({});

export default function BlogContextProvider({ children }: IProps) {
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  async function handleSubmit(tittle, description, file, autorId) {
    const formData = new FormData();
    formData.append("tittle", tittle);
    formData.append("description", description);
    formData.append("image", file);
    formData.append("user_id", autorId);

    [...formData.entries()].forEach((e) => console.log(e));

    axios
      .post("http://localhost:3000/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        toast.success("Post enviado com sucesso");
        console.log(response);
      })
      .catch((e) => {
        toast.error("Errou");
      });
  }

  async function GetPost() {
    await axios.get("http://localhost:3000/post").then((response) => {
      console.log(response.data.sucess);
      if (!response.data.sucess) {
        toast.error("Errou");
        console.log("aqui");
        return false;
      }

      setPost(response.data.data);
    });

    console.log(post);
  }

  return (
    <BlogContext.Provider
      value={{
        user,
        isLogin,
        setIsLogin,
        setUser,
        handleSubmit,
        post,
        GetPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
