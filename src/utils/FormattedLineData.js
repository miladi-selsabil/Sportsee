
export const formatedLineData = (lineChartdata) => {
  if( !lineChartdata || ! lineChartdata.data || !Array.isArray(lineChartdata.data.sessions)
  ) {
    console.error(
      "error",
      lineChartdata
    );
    return[];
  }
  const data = lineChartdata.data.sessions;
return data.map((item) => ({
    day: item.day,
    sessionLength: item.sessionLength,
  }));
}
  

