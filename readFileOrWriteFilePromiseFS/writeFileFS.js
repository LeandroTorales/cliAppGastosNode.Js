import fs from "fs";

export const writeFileFS = async (file, newData) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, JSON.stringify(newData, null, " "), (error) => {
      error ? reject(error) : resolve(console.log("El archivo se escribió correctamente."));
    });
  });
};
