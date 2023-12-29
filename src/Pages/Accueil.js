import React from "react";

import BarCharts from "../Components/BarCharts";
import {data, radarData, lineData} from "../Data/mock"; 
import RadarChart from "../Components/RadarChart";
import LineCharts from "../Components/LineCharts";

function Accueil() {
  return (
    <div>
      <BarCharts data={data} />
      <RadarChart radarChartData={radarData} />
      <LineCharts lineChartdata={lineData} />
    </div>
  );
}
export default Accueil;
