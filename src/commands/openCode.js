import * as fs from "node:fs/promises";
import { configPath } from "../utils/config.js";
import { exec } from 'node:child_process';
export const openVS = (program) => {
  program
    .command("open <alias>")
    .description("A method to open files.")
    .action(async (alias) => {
      try {
        const fullData = JSON.parse(
          await fs.readFile(configPath, { encoding: "utf8" })
        );
        const targetPath = fullData.aliases?.[alias];
        if (!targetPath) {
          console.error(` Alias "${alias}" not found in config`);
          return;
        }
        exec(`code ${targetPath}`, (err) => {
          if (err) {
            console.log(`error is ${err}`);
            return;
          }
        });
      } catch (err) {
        console.error("Error reading config file:", err.message);
      }
    });
};
