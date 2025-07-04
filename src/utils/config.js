import * as fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { writeConfig } from './writeConfig.js';

export const configDir = path.join(os.homedir(), '.lore');
export const configPath = path.join(configDir, 'config.json');

export const ensureConfigFile = async () => {
  try {
    await fs.stat(configPath); // if exists, do nothing
    return false;
  } catch (err) {
    await fs.mkdir(configDir, { recursive: true });

    const versionData = {
      firstRun: false,
      version: 1,
      aliases: {}
    };
    await writeConfig(configPath,versionData);
    return true;
  }
};

