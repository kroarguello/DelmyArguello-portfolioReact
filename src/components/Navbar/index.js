import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar1">
      <Link className="navbar-brand font1" to="/">
        Delmy Arguello
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/porfolio"
              className={window.location.pathname === "/porfolio" ? "nav-link active" : "nav-link"}
            >
              Porfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contactme"
              className={window.location.pathname === "/contactme" ? "nav-link active" : "nav-link"}
            >
              Contact me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
