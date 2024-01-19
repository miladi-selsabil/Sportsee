import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Line,
} from "recharts";
import { formatedLineData } from "../utils/FormattedLineData";

const LineCharts = (props) => {
  const transformedLineData = formatedLineData(props.lineChartdata);

  return (
    <LineChart
      width={408}
      height={263}
      data={transformedLineData}
      margin={{ top: 5, bottom: 5, right: 45 }}
      style={{ backgroundColor: "red", borderRadius: 5, margin:"10px" }}
    >
      <XAxis dataKey="name" stroke="#fff" />
      <YAxis style={{ display: "none" }} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="time" stroke="#fff" />
    </LineChart>
  );
};

export default LineCharts;
