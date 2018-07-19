const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  if(seconds < 0)
    return;
  else {
    setTimeout(function() {
      displayCountdown(seconds);
      timer(--seconds);
    }, 1000);
  }
};
module.exports = {
  timer
};
