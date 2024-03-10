import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
} from "recharts";
import { formatedData } from "../utils/FormattedData";
import { CustomToolTip } from "../utils/FormattedData";
const BarCharts = (props) => {
  const transformedData = formatedData(props.data);
  return (
    <>
      <div className="activity">
        <h3 className="activityTitle">Activité quotidienne</h3>
      </div>
      <ResponsiveContainer height={320}>
        <BarChart
          barSize={7}
          barGap={8}
          data={transformedData}
          style={{ backgroundColor: "#FBFBFB" }}
          barCategoryGap={10}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            stroke="#DEDEDE"
            tickMargin={16}
            tickFormatter={(day) => new Date(day).getDate()}
          />
          <YAxis yAxisId={"cal"} hide />
          <YAxis
            yAxisId={"kil"}
            orientation="right"
            tickMargin={30}
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            axisLine={false}
            domain={["dataMin-2", "dataMax+1"]}
            tickCount={3}
          />

          <Tooltip
            content={<CustomToolTip />}
            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
          />
          <Legend
            verticalAlign="top"
            height={36}
            align="right"
            iconType="circle"
          />
          <Bar
            radius={[20, 20, 0, 0]}
            dataKey="calories"
            fill="#E60000"
            yAxisId={"cal"}
            maxBarSize={10}
          />
          <Bar
            radius={[20, 20, 0, 0]}
            dataKey="kilogram"
            fill="#282D30"
            yAxisId={"kil"}
            maxBarSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarCharts;
