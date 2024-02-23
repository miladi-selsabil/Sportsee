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

const BarCharts = (props) => {
  const transformedData = formatedData(props.data);

  return (
    <ResponsiveContainer width={970} height={350}>
      <BarChart
        width={"100%"}
        height={"100%"}
        data={transformedData}
        style={{ backgroundColor: "#FBFBFB" }}
        barCategoryGap={10}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" width={7} />
        <XAxis dataKey="day" />
        <YAxis yAxisId={"cal"} hide />
        <YAxis yAxisId={"kil"} orientation="right" />

        <Tooltip />
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
  );
};

export default BarCharts;
