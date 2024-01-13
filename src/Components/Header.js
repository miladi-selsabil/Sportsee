import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/logos.png";


import "./../index.css";

function Header() {
  return (
    <header>
      <div className="header-section">
        <img src={logo} alt="Logo" />

        <nav>
          <NavLink to={"/"}>Accueil</NavLink>
          <NavLink to={"/profile"}>Profile</NavLink>
          <NavLink to={"/reglages"}>Reglage</NavLink>
          <NavLink to={"/communaute"}>Communaute</NavLink>
        </nav>
      </div>
    
    </header>
  );
}

export default Header;
