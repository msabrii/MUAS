import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const closeMenu = () => {
    setClick(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MUAS
        </Link>
        <div className="menu-icon" onClick={() => setClick((prev) => !prev)}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/committee" className="nav-links" onClick={closeMenu}>
              Committee
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-links" onClick={closeMenu}>
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/mudae" className="nav-links" onClick={closeMenu}>
              MUDAE
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
