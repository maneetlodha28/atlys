import { createBrowserRouter } from "react-router-dom";
import Home from "src/pages/home";
import AuthContainer from "src/containers/auth";

export const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <AuthContainer />,
  },
]);
