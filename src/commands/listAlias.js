import { configPath } from "../utils/config.js";
import { readConfig, sizeOfConfig } from "../utils/fsUtils.js";
import path from "node:path";
import Table from "cli-table3";
import chalk from "chalk";

export const listAlias = (program) => {
  program
    .command("list")
    .description("shows the list of alias you have")
    .action(async () => {
      //TODO - use try catch
      const fileData = await readConfig(configPath);
      const cool = chalk.bold.magenta;
      let table = new Table({
        head: ["Aliases", "Folder Name"],
        colWidths: [25, 50],
      });
      //NOTE - object.entries
      const numOfAliases = Object.keys(fileData.aliases).length;
      for (const [key, value] of Object.entries(fileData.aliases)) {
        const folderName = path.basename(value);
        table.push([cool(key), cool(folderName)]);
      }
      const size = await sizeOfConfig(configPath);
      console.log(
        `Found ${cool(numOfAliases)} aliases (config file: ${chalk.cyan(
          (size / 1024).toFixed(2)
        )} KB)`
      );
      console.log(table.toString());
    });
};
