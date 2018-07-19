const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();

  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.green(figlet.textSync("Khodhi")));
  console.log(chalk.green(figlet.textSync("______")));
  console.log(chalk.red(figlet.textSync(myTimer())));
  console.log(chalk.green(figlet.textSync("------")));
  

};


function myTimer(){
  var time = new Date();
  var timeStr = time.toLocaleTimeString()
  return timeStr
  
}
module.exports =  {displayCountdown:displayCountdown} ;
