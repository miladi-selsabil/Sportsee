import React from "react";
import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  PolarGrid,
} from "recharts";
import { formatedRadarData } from "../utils/FormattedRadarData";

const RadarCharts = (props) => {
  const transformedRadarData = formatedRadarData(props.radarChartData);

  return (
  <RadarChart outerRadius={90} width={730} height={250} data={transformedRadarData}>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="Mike" dataKey="A" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
  <Legend />
</RadarChart>
  );
};

export default RadarCharts;
