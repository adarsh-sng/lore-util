import * as fs from "node:fs/promises";
export const writeConfig = async (path, data) => {
  const newData = JSON.stringify(data, null, 2);
  await fs.writeFile(path, newData);
};
