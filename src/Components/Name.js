import { useInfoUser } from "../utils/FormattedUserInfoData";

const Name = ({ data }) => {
  const dataFormated = useInfoUser(data);
  return (
    <div className="name">
        <div  className="title">
          Bonjour <span className="red-text">{dataFormated.valeur}</span>
        </div>

      <div className="text">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
    </div>
  );

};      
export default Name;
