import inquirer from "inquirer";
import { askGastoCategory } from "./askGastoCategory.js";
import { totalGastos } from "./totalGastos.js";

export const listMoreOptionsInquirer = async () => {
  const listOptions = await inquirer.prompt([
    {
      type: "list",
      name: "option",
      message: "Selecciona una nueva opción",
      choices: [
        { value: 1, name: "Gastos de una categoría" },
        { value: 2, name: "Total de gastos" },
        { value: 99, name: "Salir del CLI" },
      ],
    },
  ]);

  switch (listOptions.option) {
    case 1:
      await askGastoCategory();
      break;
    case 2:
      await totalGastos();
      break;
    case 99:
      break;
    default:
      break;
  }
};
