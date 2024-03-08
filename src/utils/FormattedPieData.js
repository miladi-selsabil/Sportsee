export const formattedPieData = (pieChartData) => {
  const todayScore = pieChartData && pieChartData.todayScore ? parseInt(pieChartData.todayScore * 100) : 0;

  const score =
    pieChartData && pieChartData.score
      ? parseInt(pieChartData.score * 100)
      : 0;

  return {
    dataArray: [{ value: todayScore || score }],
  };
};
