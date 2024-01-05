import React from "react";
import{
    PieChart,
    Pie,
} from "recharts";
import { formattedPieData } from "../utils/FormattedPieData";

const PieCharts = (props) => {
    const transformedPieData = formattedPieData(props.pieChartData);
return (
  <PieChart width={730} height={250}>
    <Pie
      data={transformedPieData}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      innerRadius={60}
      outerRadius={80}
      fill="#82ca9d"
      label
    />
  </PieChart>
);
};
export default PieCharts;