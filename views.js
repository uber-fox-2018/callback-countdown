const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.red(figlet.textSync("Harles Bayu A")));
  console.log(chalk.green(figlet.textSync(seconds)));
  
};

module.exports = { displayCountdown };
