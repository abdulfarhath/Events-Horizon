import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/about" className="nav-link">
        <h1 className="nav-ele">ABOUT US</h1>
      </Link>
      <Link to="/events" className="nav-link">
        <h1 className="nav-ele">EVENTS</h1>
      </Link>
      <div className="nav-logo-container">
        <Link to="/home" className="nav-logo-link">
          <div className="nav-logo"></div>
          <h1>EVENTS HORIZON</h1>
        </Link>
      </div>
      <Link to="/gallery" className="nav-link">
        <h1 className="nav-ele">GALLERY</h1>
      </Link>
      <Link to="/contact" className="nav-link">
        <h1 className="nav-ele">CONTACT</h1>
      </Link>
    </div>
  );
}

export default Navbar;
