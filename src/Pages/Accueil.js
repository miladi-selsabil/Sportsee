import React from "react";

import BarCharts from "../Components/BarCharts";
import {data, radarData, lineData, pieData, infoData} from "../Data/mock"; 
import RadarChart from "../Components/RadarChart";
import LineCharts from "../Components/LineCharts";
import PieCharts from "../Components/PieChart";
import InfoCard from "../Components/InforData";
import Icon from "../Components/icon";
import Name from "../Components/Name";

function Accueil() {

  return (
    <div className="container">
      <Icon />

      <div className="charts">
        <Name data={data} />

        <BarCharts data={data} />
        <div className="threechart">
          <LineCharts lineChartdata={lineData} />
          <RadarChart radarChartData={radarData} />

          <PieCharts pieChartData={pieData} />
        </div>
      </div>
      <div>
        {infoData.map((info, index) => (
          <InfoCard key={index} data={info} />
        ))}
      </div>
    </div>
  );
}
export default Accueil;
