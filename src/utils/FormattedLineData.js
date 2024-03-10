export function CustomToolTip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="tooltipLine">
        <p>{payload[0].value + "min"}</p>
      </div>
    );
  }
  return null;
}
export const formatDate = (value) => {
  if (value === 1) {
    return "L";
  }
  if (value === 2) {
    return "M";
  }
  if (value === 3) {
    return "M";
  }
  if (value === 4) {
    return "J";
  }
  if (value === 5) {
    return "V";
  }
  if (value === 6) {
    return "S";
  }
  if (value === 7) {
    return "D";
  }
};
export const formatedLineData = (lineChartdata) => {
  
  const data = lineChartdata?.data?.sessions || [];
  return data.map((item) => ({
    day: item.day,
    sessionLength: item.sessionLength,
  }));
};
