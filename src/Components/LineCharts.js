import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";
import { formatDate } from "../utils/FormattedLineData";
import { formatedLineData } from "../utils/FormattedLineData";
import { CustomToolTip } from "../utils/FormattedLineData";

const LineCharts = (props) => {
  const transformedLineData = formatedLineData(props.lineChartdata);

  return (
    <>
      <div className="lineChart">
        <h3 className="lineTitle">
          Durée moyenne des <br /> sessions
        </h3>
      
      <ResponsiveContainer  >
        <LineChart
          data={transformedLineData}
          style={{ backgroundColor: "red", borderRadius: 5 }}
        >
          <XAxis
            dataKey="day"
            stroke="#fff"
            tick={{ fill: "#FFFFFF", opacity: "0.5" }}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            tickFormatter={formatDate}
          />
          <YAxis hide domain={["dataMin-10", "dataMax+10"]} />
          <Tooltip content={<CustomToolTip />} cursor={false} />

          <Line
            type="natural"
            dataKey="sessionLength"
            opacity="0.5"
            dot={false}
            strokeWidth={2}
            activeDot={{
              stroke: "#FFF",
              strokeWidth: 4,
              r: 2,
            }}
            stroke="#FFF"
          />
        </LineChart>
      </ResponsiveContainer></div>
    </>
  );
};

export default LineCharts;
