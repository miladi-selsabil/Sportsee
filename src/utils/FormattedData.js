export const formatedData = (data) => {
  return data.map((item) => ({
    day: item.day,
    calories: item.calories,
    kilogram: item.kilogram,
  }));
};
