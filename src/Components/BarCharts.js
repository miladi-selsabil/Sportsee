import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { data } from "../Data/mock";

const BarCharts = () => {
  const transformedData = data.map((item) => ({
    Day: item.Day,
    calories: item.calories,
    kilogramme: item.kilogramme
  }));

  return (
    <BarChart width={730} height={250} data={transformedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="calories" fill="#8884d8" />
      <Bar dataKey="kilogramme" fill="#FFFF00" />
    </BarChart>
  );
};

export default BarCharts;
