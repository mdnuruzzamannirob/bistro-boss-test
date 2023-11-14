import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";
import useScrollTop from "../hooks/useScrollTop";

const MainLayout = () => {
  useScrollTop();

  return (
    <div className="font-Rubik">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
