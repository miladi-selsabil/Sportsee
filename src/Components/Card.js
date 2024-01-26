import React from "react";

const Card = ({ texte, imageSrc, valeur }) => {
  return (
    <div className="wrapper">
      <img src={imageSrc} alt={texte} />
      <div className="wrapper-value">
      <h2>{valeur}</h2>
      <p className="txt">{texte}</p>
      </div>
    </div>
  );
};

export default Card;
