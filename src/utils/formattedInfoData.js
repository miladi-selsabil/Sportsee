import Lipides from "../assets/calories-icon.png";
import Calories from "../assets/carbs-icon.png";
import Glucides from "../assets/fat-icon.png";
import Proteines from "../assets/protein-icon.png";



export const getInfoUser = (data) => [
  {
    title: "Lipides",
    value: getValueByKey(data, "lipides"),
    unite: "g",
    icone: Lipides,
  },
  {
    title: "Proteines",
    value: getValueByKey(data, "proteines"),
    unite: "g",
    icone: Proteines,
  },
  {
    title: "calories",
    value: getValueByKey(data, "calories"),
    unite: "g",
    icone: Calories,
  },
  {
    title: "Glucies",
    value: getValueByKey(data, "glucides"),
    unite: "g",
    icone: Glucides,
  },
];

const getValueByKey = (data, key) => {
  return data[key]
}