export const formatedData = (datas) => {
  // if ( !datas || !datas.data || !Array.isArray(datas.data.sessions)
  // ) {
  //   console.error(
  //     "error",
  //     datas
  //   );
  //   return [];
  // }

  const data = datas?.data?.sessions || [];

  return data.map((item) => ({
    day: item.day,
    calories: item.calories,
    kilogram: item.kilogram,
  }));
};
export function CustomToolTip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p>{payload[0].value + "kg"}</p>
        <p>{payload[1].value + "kcal"}</p>
      </div>
    );
  }
  return null;
};