const { displayCountdown } = require("./views");
function sleep (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

const timer = seconds => {
  while (seconds >= 0) {
    if (seconds < 60 && seconds >= 10) {
      displayCountdown(`${0}${0} : ${seconds}`)
      seconds -= 1;
      sleep(1000)
    } else if (seconds < 10) {
      displayCountdown(`${0}${0} : ${0} ${seconds}`)
      seconds -= 1;
      sleep(1000)
    } else if (seconds >=60) {
      if (seconds === 60) {
        displayCountdown(`${0}${0} : ${seconds - 1}`)
        seconds -= 1;
        sleep(1000)
      } else  if (seconds < 600){
        let minutes = Math.floor(seconds / 60)
        let sec = seconds % 60
        if (sec >= 10) {
          displayCountdown(`${0}${minutes} : ${sec}`)
          seconds -= 1;
          sleep(1000)
        } else {
          displayCountdown(`${0}${minutes} : ${0}${sec}`)
          seconds -= 1;
          sleep(1000)
        }
      } else if (seconds > 600){
        let minutes = Math.floor(seconds / 60)
        let sec = seconds % 60
        displayCountdown(`${minutes} : ${sec}`)
        seconds -= 1;
        sleep(1000)
      } else {
        let minutes = Math.floor(seconds / 60)
        let sec = seconds % 60
        displayCountdown(`${minutes} : ${0}${sec}`)
        seconds -= 1;
        sleep(1000)
      }
    }
  }
};

const number = hitung => {

}


module.exports = {
  timer
};
