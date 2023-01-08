import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Header } from "./components/Header";
import BlogContextProvider from "./context/BlogContext";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Login } from "./pages/Login/Login";
import { Admin } from "./pages/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div> Not Found 404 </div>,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BlogContextProvider>
      <Header />
      <RouterProvider router={router} />
    </BlogContextProvider>
  </React.StrictMode>
);
