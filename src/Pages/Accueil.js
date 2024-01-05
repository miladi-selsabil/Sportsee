import React from "react";

import BarCharts from "../Components/BarCharts";
import {data, radarData, lineData, pieData, infoData} from "../Data/mock"; 
import RadarChart from "../Components/RadarChart";
import LineCharts from "../Components/LineCharts";
import PieCharts from "../Components/PieChart";
import InfosData from "../Components/InforData";

function Accueil() {
  return (
    <div>
      <BarCharts data={data} />
      <RadarChart radarChartData={radarData} />
      <LineCharts lineChartdata={lineData} />
      <PieCharts pieChartData={pieData} />
      <InfosData info={infoData}/>
    </div>
  );
}
export default Accueil;
