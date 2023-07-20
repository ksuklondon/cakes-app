import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo2.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="cake db logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
