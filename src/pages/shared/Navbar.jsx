import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navLink = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#BB8506] underline" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/All-Menu"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#BB8506] underline" : ""
        }
      >
        All Menu
      </NavLink>
      <NavLink
        to="/Shop-Now"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#BB8506] underline" : ""
        }
      >
        Shop Now
      </NavLink>
      <NavLink
        to="/Contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#BB8506] underline" : ""
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/Dashboard"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#BB8506] underline" : ""
        }
      >
        Dashboard
      </NavLink>
    </>
  );

  return (
    <nav className="w-full fixed z-10 bg-black/50">
      <div className="navbar max-w-screen-2xl mx-auto text-white p-0 py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link className="flex items-end gap-2 text-xl font-light uppercase border-none outline-none">
            <img width={44} height={44} src={logo} alt="" />
            <h3>
              <span className="text-[#BB8506]">B</span>istro{" "}
              <span className="text-[#BB8506]">B</span>oss
            </h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 text-lg font-light underline-offset-[6px] tracking-widest">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <Link>
            <button className="px-5 btn btn-sm bg-[#BB8506] hover:bg-white  text-white hover:text-[#BB8506] border-0 border-b-4 border-white hover:border-[#BB8506] rounded-lg transition-colors duration-500 ease-in-out font-light outline-none">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
