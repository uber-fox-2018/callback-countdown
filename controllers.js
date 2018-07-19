const { displayCountdown } = require("./views");

const timer = seconds => {
  let count = setInterval(() => {
    if (seconds >= 0){
      displayCountdown(converter(seconds));
      seconds --;
    } else {
      clearInterval(count);
    }
  }, 1000)
};

const converter = input => {
  let minutes = Math.floor(input / 60)
  let seconds = input % 60; 
  if (minutes >= 10){
    if (seconds >= 10){
      return `${minutes} : ${seconds}`;
    } else {
      return `${minutes} : 0${seconds}`;
    }
  } else {
    if (seconds >= 10){
      return `0${minutes} : ${seconds}`;
    } else {
      return `0${minutes} : 0${seconds}`;
    }
  }
}

module.exports = {
  timer
};
