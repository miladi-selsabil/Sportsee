import { use } from "../utils/formattedInfoData";

const Name = ({ data }) => {
  const dataFormated = use(data);
  return (
    <div className="name">
      {dataFormated.map((info, index) => (
        <div key={index} className="title">
          Bonjour <span className="red-text">{info.valeur}</span>
        </div>
      ))}
      <div className="text">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
    </div>
  );
};
export default Name;
