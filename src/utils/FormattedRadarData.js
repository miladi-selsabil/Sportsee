export const formatedRadarData = (radarChartData) => {
  return radarChartData.map((item) => ({
    subject: item.subject,
    A: item.A,
    B: item.B,
    fullMark: item.fullMark,
  }));
};
