import React from "react";

import BarCharts from "../Components/BarCharts";
import {data, radarData, lineData, pieData, infoData} from "../Data/mock"; 
import RadarChart from "../Components/RadarChart";
import LineCharts from "../Components/LineCharts";
import PieCharts from "../Components/PieChart";
import InfoCard from "../Components/InforData";
import Icon from "../Components/icon";

function Accueil() {

  return (
    <div className="container">
      <Icon/>
      <BarCharts data={data} />
      <RadarChart radarChartData={radarData} />
      <LineCharts lineChartdata={lineData} />
      <PieCharts pieChartData={pieData} />
      <div>
        {infoData.map((info) => (
          <InfoCard info={info} />
        ))}
      </div>
    </div>
  );
}
export default Accueil;
