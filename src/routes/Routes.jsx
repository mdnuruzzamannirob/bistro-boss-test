import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import AllMenu from "../pages/menu/AllMenu";
import ShopNow from "../pages/shop/ShopNow";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "all-menu",
        element: <AllMenu></AllMenu>,
      },
      {
        path: "shop-now",
        element: <ShopNow></ShopNow>,
      },
      {
        path: "dashboard",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routes;
