import { Link } from "react-router-dom";
import "./Navbar.css";
import { useUserContext } from "../features/auth/authSlice";
import { TbLogout2 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";



const Navbar = () => {
  const { logout, payloadToken } = useUserContext();
  const token = localStorage.getItem("token");
  return (
    <div className="navbar-container">
      <Link to={'/'} className="nav-logo">Custom Blog</Link>
      <div className="nav-right">
        <ul className="blog-nav">
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/about"}>About</Link>
        </ul>

        <ul className="login-nav">
          {!token && (
            <>
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Register</Link>
            </>
          )}
        </ul>

        {!token || token == "null" ? (
          <></>
        ) : (
          <div className="user">
            <p className="user-logo">{"S"}</p>
            <ul className="user-dropdown">
              <Link to={"./profile"}>
                <span>
                  <CgProfile />
                </span>
                <span>Profile</span>
              </Link>
              <Link to={"/dashboard"}>
                <span>< MdOutlineDashboard /></span>
                <span>Dashboard</span>
              </Link>
              <li onClick={logout}>
                <span><TbLogout2 /></span>
                <span>Logout</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
