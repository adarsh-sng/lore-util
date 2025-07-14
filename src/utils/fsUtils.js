import * as fs from "node:fs/promises";

export const readConfig = async (path) => {
  const fileData = await fs.readFile(path, { encoding: "utf8" });
  return JSON.parse(fileData);
};
export const writeConfig = async (path, data) => {
  const newData = JSON.stringify(data, null, 2);
  await fs.writeFile(path, newData);
};
export const sizeOfConfig = async (path) => {
  try {
    const stats = await fs.stat(path);
    const size = stats.size;
    return size;
  } catch (err) {
    throw err;
  }
};
