export const formatedData = (datas) => {
  if ( !datas || !datas.data || !Array.isArray(datas.data.sessions)
  ) {
    console.error(
      "error",
      datas
    );
    return [];
  }

  const data = datas.data.sessions;

  return data.map((item) => ({
    day: item.day,
    calories: item.calories,
    kilogram: item.kilogram,
  }));
};
