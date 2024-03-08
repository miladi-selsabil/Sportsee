import React from "react";
import Card from "./Card";
import { getInfoUser } from "../utils/formattedInfoData";
const InfoCard = ({ data }) => {
  const dataFormated = getInfoUser(data);
  return (
    <div className="infouser">
      {dataFormated.map((info, index) => (
        <Card
          key={index}
          valeur={`${info.value} ${info.unite}`}
          texte={`${info.title} `}
          imageSrc={info.icone}
        />
      ))}
    </div>
  );
};

export default InfoCard;
