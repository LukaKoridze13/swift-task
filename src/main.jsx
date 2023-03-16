import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Profile from "./Pages/Profile";
import "./Style.css";
import SingleProfile from "./Pages/SingleProfile";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile/:id",
      element: <SingleProfile />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ],
  { basename: "/swift-task/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
