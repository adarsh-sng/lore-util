import path from "node:path";
import { configPath } from "../utils/config.js";
import { readConfig } from "../utils/fsUtils.js";
import { writeConfig } from "../utils/fsUtils.js";

export const createAlias = (program) => {
  program
    .command("alias <alias> <userpath>")
    .description("Create an alias for a workspace path")
    .action(async (alias, userPath) => {
      try {
        const resolvedPath = path.resolve(userPath); // NOTE: normalize path -- study more
        const data = JSON.parse(await readConfig(configPath));
        data.aliases = data.aliases || {};
        data.aliases[alias] = userPath;
        await writeConfig(configPath, data);
        console.log(`[lore] Alias "${alias}" added for path: ${resolvedPath}`);
      } catch (err) {
        console.error(
          `[lore] Failed to create alias "${alias}": ${err.message}`
        );
      }
    });
};
