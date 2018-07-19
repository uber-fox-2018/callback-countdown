const { displayCountdown } = require("./views");

const timer = seconds => {
  let repeater = setInterval(function(){
    let display = ``
    let hour = Math.floor(seconds/60)
    let second = seconds % 60

    if (hour < 10) {
      display += `0`+hour+ ` `
    }else {
      display += hour + ` `
    }

    if (second < 10) {
      display += `: 0`+second + ` `
    }else {
      display += `: `+second + ` `
    }

    if (seconds === 0) {
      clearInterval(repeater)
    }
    displayCountdown(display)
    seconds--
  },1000)
};

module.exports = {
  timer
};
