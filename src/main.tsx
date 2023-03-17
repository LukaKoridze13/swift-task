import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
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
  { basename: "/swift/" }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<RouterProvider router={router} />);
