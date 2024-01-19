import React from "react";
import Card from "./Card";
import { getInfoUser } from "../utils/formattedInfoData";
const InfoCard = ({ data }) => {
  const dataFormated = getInfoUser(data);
  return (
    <div>
      {dataFormated.map((info, index) => (
        <Card
          key={index}
          texte={`${info.title}: ${info.value} ${info.unite}`}
          imageSrc={info.icone}
        />
      ))}
    </div>
  );
};

export default InfoCard;
