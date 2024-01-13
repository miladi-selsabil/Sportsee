import React from "react";
import Card from "./Card";

const InfoCard = ({ info }) => {
  
  return (
    <div>
      <Card texte={`Calories: ${info.calories}kcal`} />
      <Card texte={`Lipides: ${info.lipides}g`} />
      <Card texte={`Glucides: ${info.glucides}g`} />
      <Card texte={`Protéines: ${info.proteines}g`} />
    </div>
  );
};

export default InfoCard;
