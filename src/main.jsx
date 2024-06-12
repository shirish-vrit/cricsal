import React from "react";
import ReactDOM from "react-dom/client";
import LightBulb from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LightBulb />,
  },

  {
    path: "/profile",
    element: <div>My name is shirish</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
