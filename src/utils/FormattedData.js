export const formatedData = (data) => {
  return data.map((item) => ({
    Name: item.personne.name,
    Day: item.Day,
    calories: item.calories,
    kilogramme: item.kilogramme,
  }));
};
