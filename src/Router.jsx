import { createBrowserRouter } from "react-router";
import Layout from "./Layout";

import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Cart from "./Pages/Cart";
import Error from "./Error";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Order from "./Pages/Order";
import WishList from "./Pages/WishList";
import LearnUI from "./Components/LearnUI";

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
        path: "contact",
        element: <Contact />
      },
      {
        path: "learnui",
        element: <LearnUI/>
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "order",
        element: <Order />
      },
      {
        path: "wishlist",
        element: <WishList />
      },
      {
        path:"login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />

      },
      {
        path: "*",
        element: <Error />
      }
    ]
  }
]);

export default router;
