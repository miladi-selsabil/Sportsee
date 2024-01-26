import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { formatedData } from "../utils/FormattedData";

const BarCharts = (props) => {
  const transformedData = formatedData(props.data);

  return (
    <BarChart
      width={730}
      height={250}
      data={transformedData}
      style={{ backgroundColor: "#FBFBFB", margin: "10px" }}
    >
      <CartesianGrid strokeDasharray="3 3" width={7} />
      <XAxis dataKey="Day" />
      <YAxis yAxisId={"cal"} hide />
      <YAxis yAxisId={"kil"} orientation="right" />
      <Tooltip />
      <Legend />
      <Bar
        radius={[20, 20, 0, 0]}
        dataKey="calories"
        fill="#E60000"
        yAxisId={"cal"}
      />
      <Bar
        radius={[20, 20, 0, 0]}
        dataKey="kilogramme"
        fill="#282D30"
        yAxisId={"kil"}
      />
    </BarChart>
  );
};

export default BarCharts;
