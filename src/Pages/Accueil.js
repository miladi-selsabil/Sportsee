import React, { useEffect, useState } from "react";
import BarCharts from "../Components/BarCharts";
import { data, radarData, lineData, pieData, infoData } from "../Data/mock";
import RadarChart from "../Components/RadarChart";
import LineCharts from "../Components/LineCharts";
import PieCharts from "../Components/PieChart";
import InfoCard from "../Components/InforData";
import Icon from "../Components/icon";
import Name from "../Components/Name";
import { env } from "../config/env";
import { useParams } from "react-router-dom";

function Accueil() {
  const [activity, setActivity] = useState([]);
  const [averageSession, setAverageSession] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [userId, setUserId] = useState("");
  const { id } = useParams();

  const getId = async () => {
    try {
      const response = await fetch(`${env.backendUrl}/user/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setUserId(data.id);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données de l'utilisateur :",
        error
      );
    }
  };

  const getActivity = async () => {
    try {
      const response = await fetch(
        `${env.backendUrl}/user/${userId}/activity`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      setActivity(data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données de l'utilisateur :",
        error
      );
    }
  };

  const getAverage = async () => {
    try {
      const response = await fetch(
        `${env.backendUrl}/user/${userId}/average-sessions`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setAverageSession(data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données de l'utilisateur :",
        error
      );
    }
  };

  const getPerformance = async () => {
    try {
      const response = await fetch(
        `${env.backendUrl}/user/${userId}/performance`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setPerformance(data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données de l'utilisateur :",
        error
      );
    }
  };

  useEffect(() => {
    getId();
  }, [id]);

  useEffect(() => {
    if (userId) {
      getActivity();
      getAverage();
      getPerformance();
    }
  }, [userId]);

  return (
    <div className="container">
      <Icon />

      <div className="charts">
        <Name data={userId} />
        <BarCharts data={data} />
        <div className="threechart">
          <LineCharts lineChartdata={lineData} />
          <RadarChart radarChartData={radarData} />

          <PieCharts pieChartData={pieData} />
        </div>
      </div>
      <div className="card">
        {infoData.map((info, index) => (
          <InfoCard key={index} data={info} />
        ))}
      </div>
    </div>
  );
}
export default Accueil;
