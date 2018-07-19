const { displayCountdown } = require("./views");

const timer = seconds => {

  let countdown = setInterval(function () {
    displayCountdown(convertTime(seconds));
    seconds--;
    if (seconds == -1) {
      clearInterval(countdown)
    }
  }, 1000);
  
  
  function convertTime(seconds) {
    let menit = Math.floor(seconds / 60);
    let detik = Math.floor(seconds % 60);

    if (menit < 10) {
      var mins = '0' + menit;
    } else {
      mins = menit;
    }

    if (detik < 10) {
      var second = '0' + detik;
    } else {
      second = detik;
    }
    return `${mins} : ${second}`;
  }
};

module.exports = {
  timer
};
