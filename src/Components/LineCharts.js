import React from "react";
import {
  LineChart,
  XAxis,
  CartesianGrid,
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
      width={730}
      height={250}
      data={transformedLineData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="time" stroke="#8884d8" />
    </LineChart>
  );
};

export default LineCharts;
