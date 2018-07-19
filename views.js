const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.yellowBright(figlet.textSync("Countdown App")));
  console.log(chalk.whiteBright(figlet.textSync(seconds)));
  
};

module.exports = { displayCountdown };
