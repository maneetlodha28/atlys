import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { routeConfig } from "./router/routes.config";

const rootElement = document.getElementById("root") as HTMLElement;

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={routeConfig} />
  </React.StrictMode>
);
