import inquirer from "inquirer";
import { readFileFS } from "../../readFileOrWriteFilePromiseFS/readFileFS.js";
import { writeFileFS } from "../../readFileOrWriteFilePromiseFS/writeFileFS.js";

const inputImportGasto = [
  {
    type: "input",
    name: "importe",
    message: "Ingresa el importe del gasto",
    validate(value) {
      const pass = value.match(/^(?:0|[1-9]\d{0,8}|1000000000)$/);
      if (pass) {
        return true;
      }
      return "Por favor, ingresa un importe valido.";
    },
  },
];

export const askImportOfGastoPrompt = async (gastoCategory) => {
  const readFile = await readFileFS("./gastos.json");
  const run = await inquirer.prompt(inputImportGasto);
  const importe = run.importe;
  const newData = [...readFile, { gastoCategory: gastoCategory.toLowerCase(), importe }];

  return new Promise((resolve, reject) => {
    try {
      writeFileFS("./gastos.json", newData).then((res) => {
        resolve(res);
      });
    } catch (error) {
      reject(error);
    }
  });
};
