import React from "react";
import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  PolarGrid,
  ResponsiveContainer,
} from "recharts";
import { formatedRadarData } from "../utils/FormattedRadarData";

const RadarCharts = (props) => {
  const transformedRadarData = formatedRadarData(props.radarChartData);

  return (
    <ResponsiveContainer width={300} height={263}>
      <RadarChart
        outerRadius={90}
        // width={300}
        // height={263}
        data={transformedRadarData}
        style={{ backgroundColor: "#000", borderRadius: 5, margin: "10px" }}
      >
        <PolarGrid
          gridType="polygon"
          radialLines={false}
          polarRadius={[0, 10, 27, 49, 72, 95]}
          stroke="#FFF"
        />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: "white", fontSize: 15 }}
        />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 150]}
          tick={false}
          axisLine={false}
        />
        <Radar dataKey="A" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarCharts;
