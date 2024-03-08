import React from "react";
import { PieChart, Pie, Label, ResponsiveContainer } from "recharts";
import { formattedPieData } from "../utils/FormattedPieData";

const PieCharts = (props) => {
  const transformedPieData = formattedPieData(props.pieChartData);

  return (
    <>
      <div className="pieChartCard">
        <h3 className="scorePie">Score</h3>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart style={{ backgroundColor: "#FBFBFB" }}>
          <Pie
            data={transformedPieData.dataArray}
            dataKey="value"
            nameKey="name"
            startAngle={180}
            endAngle={50}
            cornerRadius={20}
            innerRadius={65}
            outerRadius={80}
            fill="#FF0000"
            paddingAngle={5}
          >
            <Label
              value={`${transformedPieData.dataArray[0].value}% de votre objectif`}
              position="center"
              fill="#000"
              fontSize={20}
              width={100}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default PieCharts;
