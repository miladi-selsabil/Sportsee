import React from "react";
import calories from "./../assets/calories-icon.png";
import proteines from "./../assets/protein-icon.png";
import glucides from "./../assets/carbs-icon.png"
import lipides from "./../assets/fat-icon.png";

const Card = ({ texte, info }) => {
let imageSrc;

  switch (info) {
    case "calorie":
      imageSrc = calories;
      break;
    case "proteines":
      imageSrc = proteines;
      break;
    case "lipides":
      imageSrc = lipides;
      break;
    case "glucides":
      imageSrc = glucides;
      break;
    default:
      imageSrc = glucides;
      break;
  }
  return (
    <div className="wrapper">
    <img src={imageSrc} alt={texte} /> 
     <h1 className="txt">{texte}</h1>
    </div>
  );
};

export default Card;
