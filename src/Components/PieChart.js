
import React from "react";
import{
    PieChart,
    Pie,
    Label
} from "recharts";
import { formattedPieData } from "../utils/FormattedPieData";

const PieCharts = (props) => {
    const transformedPieData = formattedPieData(props.pieChartData);
return (
  <PieChart
    width={258}
    height={263}
    style={{ backgroundColor: "#FBFBFB", margin: "10px" }}
  >
    <Pie
      data={transformedPieData}
      dataKey="value"
      nameKey="name"
      startAngle={180}
      endAngle={50}
      cornerRadius={20}
      innerRadius={65}
      outerRadius={80}
      fill="#FF0000"
      paddingAngle={5}

    >
              <Label value="12% de votre objectif " position="center" fill="#000" fontSize={20} width={100} />
</Pie>
  </PieChart>
);
};
export default PieCharts;