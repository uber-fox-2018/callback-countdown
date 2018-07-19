const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  setInterval(function() {
    if (seconds > 0) {
      seconds -= 1;

      let hour = Math.floor(seconds / 3600);
      let minute = Math.floor((seconds % 3600) / 60);
      let second = Math.floor(seconds - hour * 3600 - minute * 60) ;
      let time = `${hour} : ${minute} : ${second}`;

      displayCountdown(time);
    } else {
      clearInterval(seconds);
    }
  }, 500);
};

module.exports = {
  timer
};
