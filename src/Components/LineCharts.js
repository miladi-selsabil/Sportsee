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
      width={400}
      height={263}
      data={transformedLineData}
      margin={{ top: 5, bottom: 5 }}
      style={{ backgroundColor: "red", borderRadius: 5,  }}
    >
      <XAxis
        dataKey="name"
        stroke="#fff"
        tick={{ fill: "#FFFFFF", opacity: "0.5" }}
      />
      <YAxis hide />
      <Tooltip   />
      <Legend />
      <Line type="monotone" dataKey="time" stroke="#fff" opacity="0.5" />
    </LineChart>
  );
};

export default LineCharts;
