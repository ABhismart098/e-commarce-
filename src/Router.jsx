import { createBrowserRouter } from "react-router";
import Layout from "./Layout";

import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Cart from "./Pages/Cart";
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "*",
        element: <Error />
      }
    ]
  }
]);

export default router;
