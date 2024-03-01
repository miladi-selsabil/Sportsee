export const formatedRadarData = (radarData) => {
  if (
    !radarData ||
    !radarData.data ||
    !Array.isArray(radarData.data.data) ||
    !radarData.data.kind ||
    !radarData.data.userId
  ) {
    console.error(
      "error",
      radarData
    );
    return [];
  }

  const userId = radarData.data.userId;
  const kindLabels = radarData.data.kind;
  const radarChartData = radarData.data.data;

  const formattedData = radarChartData.map((item) => ({
    subject: kindLabels[item.kind],
    value: item.value,
    userId: userId,
  }));

  return formattedData;
};
