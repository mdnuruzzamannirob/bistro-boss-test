import { Outlet } from "react-router-dom";
import useScrollTop from "../hooks/useScrollTop";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

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
