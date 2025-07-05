import chalk from "chalk";
import figlet from "figlet";
import boxen from "boxen";
import { pastel } from "gradient-string";
import { configDir } from "./config.js";
const cool = chalk.bold.red;

const wrapText = (str, width) =>
  str.match(new RegExp(`.{1,${width}}`, "g")).join("\n");

export const fileCreateMessage = () => {
  const text = `
It looks like you're a new user — or your previous config was removed.
A fresh config file has been created at:
"${configDir}"
This file stores your aliases and settings for quick access.
  `;
  console.log(
    boxen(cool(text), {
      borderStyle: "round",
      borderColor: "#d97ed4",
      // padding: 1,
      // margin: { top: 0, bottom: 1, left: 3, right: 4 },
      textAlignment: "left",
    })
  );
};

const showFooter = () => {
  const indent = "   ";
  const version = chalk.hex("#b642f5")("v0.0.1");
  const author = chalk.cyan("by Adarsh Singh");
  const github = chalk.underline("https://github.com/adarsh-lore/lore-cli");

  console.log(`\n${indent}${version} • ${author}`);
  console.log(`${indent}${github}\n`);
};

export const startMessage = (x) => {
  try {
    const text = figlet.textSync("LORE CLI!", {
      font: "ANSI Shadow",
      horizontalLayout: "fitted",
      verticalLayout: "default",
      width: 100,
      whitespaceBreak: true,
    });

    const cliTitle = pastel(text);
    const desc = `A CLI tool for managing your personal knowledge base, daily logs, and dev notes.

Usage: lore [options] [command]

Options:
  -V, --version             output the version number
  -h, --help                display help for command

Commands:
  open <alias>              A method to open files.
  alias <alias> <userpath>  Create an alias for a workspace path
  help [command]            display help for command`;

    const maxLineWidth = 65;
    const styledDesc = wrapText(desc, maxLineWidth);

    console.log(
      boxen(cliTitle, {
        title: "Welcome To",
        borderStyle: "bold",
        borderColor: "#d97ed4",
        titleAlignment: "center",
        padding: 1,
        // margin: 1,
      })
    );
    console.log(
      boxen(pastel(styledDesc), {
        borderStyle: "round",
        borderColor: "#d97ed4",
        padding: 1,
        // margin: { top: 0, bottom: 1, left: 3, right: 4 },
        textAlignment: "left",
      })
    );
    if (x) {
      fileCreateMessage();
    }
    showFooter();
  } catch (err) {
    console.log("Something went wrong...");
    console.dir(err);
  }
};
