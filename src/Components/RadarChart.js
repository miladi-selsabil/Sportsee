import React from "react";
import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarRadiusAxis,
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
        fill="#fff" 
      >
        {formatKind(payload.value, transformedRadarData)}
      </Text>
    );
  }

  return (
    <div className="radarChart">
      {transformedRadarData.length > 0 && (
        <ResponsiveContainer>
          <RadarChart
            data={transformedRadarData.reverse()}
            style={{ backgroundColor: "#000", borderRadius: 5, color: "#fff" }}
            cx="50%"
            cy="50%"
            outerRadius={58}
          >
            <PolarGrid
              gridType="polygon"
              radialLines={false}
              polarRadius={[0, 10, 27, 49, 72, 95]}
              stroke="#FFF"
              fill="#fff"
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
    </div>
  );
};

export default RadarCharts;
