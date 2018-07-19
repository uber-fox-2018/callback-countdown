const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.red(figlet.textSync("Countdown App")));
  console.log(chalk.white(figlet.textSync(seconds)));
  // Your code here...
};

// displayCountdown(10)

module.exports = { displayCountdown };
