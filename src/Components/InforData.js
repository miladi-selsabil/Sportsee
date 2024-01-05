import React  from "react";
import Card from "@mui/material/Card";

import { formattedInfoData } from "../utils/FormattedInfoData";

const InfosData = (props) => {
    const transformedInfoData = formattedInfoData(props.info);
return (
  <Card
    variant="outlined"
    width={730}
    height={250}
    data={transformedInfoData}
    dataKey="calories"
  />
);

    };
export default InfosData;