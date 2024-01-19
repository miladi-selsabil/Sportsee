import React from "react";
import{
    PieChart,
    Pie,
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
      cy="50%"
      innerRadius={60}
      outerRadius={80}
      fill="red"
      label
    />
  </PieChart>
);
};
export default PieCharts;