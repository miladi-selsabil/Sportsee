export const formatedData = (data) => {
  return data.map((item) => ({
    Day: item.Day,
    calories: item.calories,
    kilogramme: item.kilogramme,
  }));
};
