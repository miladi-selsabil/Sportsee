export const formatedRadarData = (radarData) => {
  const userId = radarData?.data?.userId || [];
  const kindLabels = radarData?.data?.kind || [];
  const radarChartData = radarData?.data?.data || [];

  const formattedData = radarChartData.map((item) => ({
    subject: kindLabels[item.kind],
    value: item.value,
    userId: userId,
  }));

  return formattedData;
};

export const formatKind = (value) => {
  if(value === "cardio"){
    return 'Cardio'
  }
  if (value === "energy"){
    return 'Energie'
  }
  if(value === 'endurance'){
    return 'Endurance'
  }
  if (value === "strength") {
    return "Force";
  }
   if (value === "speed") {
     return "Vitesse";
   }
    if (value === "intensity") {
      return "Intensité";
    }
    return
}