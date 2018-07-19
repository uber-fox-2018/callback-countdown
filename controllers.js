const { displayCountdown } = require("./views");
const timer = seconds => {
  // Your code here...
  var countDown = setInterval(function(){
    console.log(seconds);
    seconds--
    displayCountdown(seconds);
    if (seconds === 0) {
      clearInterval(countDown);
    }
  }, 1000);
};
module.exports = {
  timer
};
