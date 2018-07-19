const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var set = setInterval (() => {
    if (seconds === 0) {
      clearInterval(set)
    } else {
      seconds--
      let minute = Math.trunc(seconds/60)
      let sec = seconds%60
      if (sec < 10) {
        sec = '0' + sec 
      } 

      if (minute < 10) {
        minute = '0' + minute
      }
      
      displayCountdown(`${minute} : ${sec}`)
    }
  }, 200)
};

module.exports = {
  timer
};
