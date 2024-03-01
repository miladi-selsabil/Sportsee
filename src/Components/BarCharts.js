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
function CustomToolTip({active, payload}) {
  if(active && payload && payload.length){
    return (
      <div className="tooltip">
        <p>{payload[0].value + 'kg'}</p>
        <p>{payload[1].value + 'kcal'}</p>
      </div>
    )
  }
  return null
}
const BarCharts = (props) => {
  const transformedData = formatedData(props.data);
console.log("ffff",props.data)
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
        <XAxis dataKey="day" tickFormatter={(day) => new Date(day).getDate()} />
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
  );
};

export default BarCharts;
