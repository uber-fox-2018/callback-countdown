const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  console.clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.cyan(figlet.textSync(seconds)));
};

module.exports = { displayCountdown };
