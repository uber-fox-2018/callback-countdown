const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.red(figlet.textSync("Asrul H")));  
  console.log(seconds)
};

module.exports = { displayCountdown };
