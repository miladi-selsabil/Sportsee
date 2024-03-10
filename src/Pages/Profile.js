import React from "react";
import { NavLink } from "react-router-dom";

function Profile() {
  return (
    <div>
      <NavLink to="/user/12">👦 Karl </NavLink>
      <NavLink to="/user/18">👩 Cecilia </NavLink>
    </div>
  );
}



export default Profile;
