const { displayCountdown } = require("./views");
const sleep = require('sleep')
const timer = seconds => {
  // Your code here...
    (seconds <= 0) ? console.clear() : convertTime(seconds)
}

function convertTime(sec) {
  while(sec >= 0) {
    let minute = Math.floor(sec / 60)
    let seconds = sec % 60
    if(seconds < 10) {
      seconds = '0' + seconds
    }
    
    if(minute < 10) {
      minute = '0' + minute
    }
    displayCountdown(`${minute} : ${seconds}`)
    sleep.sleep(1)
    sec--
  }
  
}

module.exports = {
  timer
};
