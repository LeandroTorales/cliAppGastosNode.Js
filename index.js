import inquirer from "inquirer";
import { askNewGastoPrompt } from "./functionInquirer/askNewGastoPrompt.js";

const inquirerFuncMain = async () => {
  let promptRun = true;

  while (promptRun) {
    const listOpciones = await inquirer.prompt([
      {
        type: "list",
        name: "categoría",
        message: "¿A que categoría quieres derivarte?",
        choices: [
          { value: 1, name: "Gastos" },
          { value: 2, name: "Otras opciones" },
          { value: 99, name: "Salir del CLI" },
        ],
      },
    ]);
    switch (listOpciones.categoría) {
      case 1:
        await askNewGastoPrompt();
        break;
      case 2:
        await otherOpcionsCLI();
        // to do
        break;
      case 99:
        promptRun = false;
        break;
      default:
        promptRun = false;
        break;
    }
  }
};

inquirerFuncMain();
