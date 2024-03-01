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
import { formatedLineData } from "../utils/FormattedLineData";
function CustomToolTip({active, payload}) {
  if(active && payload && payload.length) {
    return(
      <div className="tooltipLine">
        <p>{payload[0].value + 'min'}</p>
      </div>
    )
  }
  return null
}
const LineCharts = (props) => {
  const transformedLineData = formatedLineData(props.lineChartdata);
console.log("line", props.lineChartdata);
const formatDate = (value) =>{
if(value === 1){
  return 'L'
}if(value === 2){
  return 'M'
}if (value === 3) {
  return "M";
}if (value === 4) {
  return "J";
}if (value === 5) {
  return "V";
}if (value === 6) {
  return "S";
}if (value === 7) {
  return "D";
}
}
  return (
    <ResponsiveContainer width={450} height={300}className={"center"}>
      <LineChart
      
        data={transformedLineData}
        margin={{ top: 5, bottom: 5 }}
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
    </ResponsiveContainer>
  );
};

export default LineCharts;
