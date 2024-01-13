import React from "react";
import icon from "./../assets/icon.png";
import icon1 from "./../assets/icon1.png";
import icon2 from "./../assets/icon2.png";
import icon3 from "./../assets/icon3.png";

import "./../index.css";

function Icon() {
  return (
<div className="icon">
  <img src={icon} alt="icon" />
  <img src={icon1} alt="icon1" />
  <img src={icon2} alt="icon2" />
  <img src={icon3} alt="icon3" />
</div>
  )
}
export default Icon