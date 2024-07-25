import { createBrowserRouter } from "react-router-dom";
import Auth from "src/pages/auth";
import Home from "src/pages/home";

export const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <Auth />,
  },
]);
