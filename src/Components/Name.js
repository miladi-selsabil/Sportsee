import { formatedData } from "../utils/FormattedData";

const Name = (props) => {
  const transformedData = formatedData(props.data);
  return (
    <div>
      {transformedData.map((info, index) => (
        <div key={index}>{info.name}</div>
      ))}
    </div>
  );
};
export default Name
