import Lipides from "../assets/calories-icon.png";
import Calories from "../assets/carbs-icon.png";
import Glucides from "../assets/fat-icon.png";
import Proteines from "../assets/protein-icon.png";
export const use = (data) => [
   {
    valeur: `${data.userInfos.firstName} ${data.userInfos.lastName}`,
  }
]
export const getInfoUser = (data) => [
  {
    value: getValueByKey(data.keyData, "lipidCount"),
    title: "Lipides",
    unite: "g",
    icone: Lipides,
  },
  {
    title: "Proteines",
    value: getValueByKey(data.keyData, "proteinCount"),
    unite: "g",
    icone: Proteines,
  },
  {
    title: "Calories",
    value: getValueByKey(data.keyData, "calorieCount"),
    unite: "g",
    icone: Calories,
  },
  {
    title: "Glucides",
    value: getValueByKey(data.keyData, "carbohydrateCount"),
    unite: "g",
    icone: Glucides,
  },
];


const getValueByKey = (data, key) => {
  return data[key];
};
