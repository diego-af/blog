import React from "react";

import { createBrowserRouter } from "react-router-dom";
import { Home } from "../src/pages/Home/index";
import { Admin } from "./pages/Admin/Admin";
import { Details } from "./pages/Details";
import { Login } from "./pages/Login/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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

export { routes };
