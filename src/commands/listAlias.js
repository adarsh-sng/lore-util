import { configPath } from "../utils/config.js";
import { readConfig } from "../utils/readConfig.js";
import path from 'node:path';
import Table from "cli-table3";
import chalk from "chalk";
import { vice } from "gradient-string";
export const listAlias = (program) => {
  program
    .command("list")
    .description("shows the list of alias you have")
    .action(async () => {
      const fileData = JSON.parse(await readConfig(configPath));
      const cool =chalk.bold.magenta
     let table = new Table({head:['Aliases','Folder Name'], colWidths: [25,50]})
      //NOTE - object.entries
      let numofAliases=0; //FIXME - change this logic.
      for (const [key, value] of Object.entries(fileData.aliases)) {
        const folderName = path.basename(value);
        numofAliases++;
        table.push([cool(key),cool(folderName)])
        // console.log(`${key.padEnd(15)}${folderName}`);
      }

      console.log(`Showing ${cool(numofAliases)} aliases`)
      console.log(table.toString());
    });
};
