import { Command } from "commander";
import { createAlias } from "./commands/createAlias.js";
import { ensureConfigFile, configDir, configPath } from "./utils/config.js";
import { openVS } from "./commands/openCode.js";
const program = new Command();
program
  .name("lore-optimizer")
  .description("A CLI application to simplify your organization of file ")
  .version("1.0.0");

(async () => {
  const firstTime = await ensureConfigFile(configDir, configPath);
  if (firstTime) {
    console.log("Welcome to lore - your next step for productivity");
  }
  openVS(program);
  createAlias(program);
  program.parse();
})();
