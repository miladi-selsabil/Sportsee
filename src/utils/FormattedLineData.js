
export const formatedLineData = (lineChartdata) => {
  return lineChartdata.map((item) => ({
    name: item.name,
    time: item.time,
  }));
};
