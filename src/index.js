import { Command } from "commander";
import { createAlias } from "./commands/createAlias.js";
import { ensureConfigFile, configDir, configPath } from "./utils/config.js";
import { openVS } from "./commands/openCode.js";
import { fileCreateMessage, startMessage } from "./utils/startScreen.js";

const program = new Command();
program
  .name("lore")
  .description("A CLI application to simplify your organization of file ")
  .version("0.0.1");

(async () => {
  const firstTime = await ensureConfigFile(configDir, configPath);
  openVS(program);
  createAlias(program);
  if ((firstTime && process.argv.length <= 2) || process.argv.length <= 2) {
    startMessage(firstTime);
  } else if (firstTime) {
    fileCreateMessage();
    program.parse(process.argv);
  } else {
    program.parse(process.argv);
  }
})();
