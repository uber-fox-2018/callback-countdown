const { displayCountdown } = require("./views");
const clear = require('clear');
const timer = seconds => {
  // Your code here...
  let interval = setInterval(function() {
    if(seconds >= 0) {
      displayCountdown(countDown(seconds));
      seconds--;
    }
  }, 1000);
  
};

function countDown(seconds) {
  let menit = Math.floor(seconds/60);
  let detik = seconds%60;
  if(seconds > 60) {
    if(menit < 10) {
      return `0${menit} : ${detik}`;
    }
    else {
      return `${menit} : ${detik}`;
    }
  }
  else if(seconds < 10) {
    return `0${menit} : 0${seconds}`;
  } 
  else if(seconds < 60) {
    return `00 : ${seconds}`;
  }
  else if(seconds === 0) {
    return `${menit} : 0${seconds}`;
  }

}



module.exports = {
  timer
};

