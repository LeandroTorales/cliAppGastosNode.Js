import { readFileFS } from "../../readFileOrWriteFilePromiseFS/readFileFS.js";

export const totalGastos = async () => {
  const readFile = await readFileFS("./gastos.json");
  const mapArrReadFile = readFile.map((elem) => Number(elem.importe));
  const reduce = mapArrReadFile.reduce((acc, cur) => acc + cur, 0);
  try {
    if (reduce !== 0) {
      console.log(`El total de los gastos es: $${reduce} ARS`);
      return reduce;
    } else {
      console.log(`Todavía no tienes gastos registrados.`);
    }
  } catch (error) {
    console.log(error);
  }
};
