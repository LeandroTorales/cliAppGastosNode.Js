import inquirer from "inquirer";
import { readFileFS } from "../../readFileOrWriteFilePromiseFS/readFileFS.js";

const listOptionsGastosInquirer = [
  {
    type: "list",
    name: "totalGastosOfCategory",
    message: "¿De cuál categoría de gastos quieres saber el total?",
    choices: ["Entretenimiento", "Comida", "Salud", "Transporte", "Otros"],
  },
];

export const askGastoCategory = async () => {
  const { totalGastosOfCategory } = await inquirer.prompt(listOptionsGastosInquirer);
  const readFile = await readFileFS("./gastos.json");
  const filterFileReader = readFile.filter(
    (elem) => elem.gastoCategory === totalGastosOfCategory.toLowerCase()
  );
  const newArrMap = filterFileReader.map((elem) => Number(elem.importe));

  return new Promise((resolve, reject) => {
    try {
      const reducerArr = newArrMap.reduce((acc, cur) => acc + cur, 0);
      resolve(
        reducerArr !== 0
          ? console.log(
              `El total de los gastos de la categoria de ${totalGastosOfCategory.toLowerCase()} es: \n $${reducerArr} ARS.`
            )
          : console.log(
              `Todavía no tienes gastos registrados en la categoría ${totalGastosOfCategory.toLowerCase()}.`
            )
      );
    } catch (error) {
      reject(error);
    }
  });
};
