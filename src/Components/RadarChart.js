import React from "react";
import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Text,
  PolarGrid,
  ResponsiveContainer,
} from "recharts";
import { formatedRadarData } from "../utils/FormattedRadarData";
import { formatKind } from "../utils/FormattedRadarData";

const RadarCharts = (props) => {
  const transformedRadarData = formatedRadarData(props.radarChartData);
  function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
    return (
      <Text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 10}
        x={x + (x - cx) / 10}
      >
        {formatKind(payload.value, transformedRadarData)}
      </Text>
    );
  }
  return (
    <>
      {transformedRadarData.length > 0 && (
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart
            outerRadius={90}
            data={transformedRadarData.reverse()}
            style={{ backgroundColor: "#000", borderRadius: 5 }}
          >
            <PolarGrid
              gridType="polygon"
              radialLines={false}
              polarRadius={[0, 10, 27, 49, 72, 95]}
              stroke="#FFF"
            />
            <PolarAngleAxis
              dataKey="subject"
              tickFormatter={formatKind}
              tick={(props) => renderPolarAngleAxis(props)}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 150]}
              tick={false}
              axisLine={false}
            />
            <Radar
              dataKey="value"
              stroke="#FF0000"
              fill="#FF0000"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default RadarCharts;
