import inquirer from "inquirer";
import { askImportOfGastoPromp } from "./askImportOfGastoPrompt.js";

const listOptionsGastosInquirer = [
  {
    type: "list",
    name: "gastoCategory",
    message: "¿Que categoría de gasto quieres registrar?",
    choices: ["Entretenimiento", "Comida", "Salud", "Transporte", "Otros"],
  },
];

export const askNewGastoPrompt = async () => {
  return new Promise((resolve, reject) => {
    try {
      inquirer.prompt(listOptionsGastosInquirer).then((res) => {
        resolve(askImportOfGastoPromp(res.gastoCategory));
      });
    } catch (error) {
      reject(error);
    }
  });
};
