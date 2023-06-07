import fs from "fs";

export const readFileFS = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (error, data) => {
      error ? reject(error) : resolve(JSON.parse(data));
    });
  });
};
