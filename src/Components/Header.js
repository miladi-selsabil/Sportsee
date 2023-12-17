import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/logos.png";
import icon from "./../assets/icon.png";
import icon1 from "./../assets/icon1.png";
import icon2 from "./../assets/icon2.png";
import icon3 from "./../assets/icon3.png";

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
      <div className="icon">
        <img src={icon} alt="icon" />
        <img src={icon1} alt="icon1" />
        <img src={icon2} alt="icon2" />
        <img src={icon3} alt="icon3" />
      </div>
    </header>
  );
}

export default Header;
