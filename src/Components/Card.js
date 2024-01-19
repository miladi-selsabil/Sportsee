import React from "react";

const Card = ({ texte, imageSrc }) => {
  return (
    <div className="wrapper">
      <img src={imageSrc} alt={texte} />
      <h1 className="txt">{texte}</h1>
    </div>
  );
};

export default Card;
