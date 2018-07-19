const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var countdown = setInterval(function(){
    let menit = Math.floor(seconds/60)
    let detik = seconds%60
    if (seconds === 0) {
      clearInterval(countdown)
    }

    if (detik < 10) {
      detik = `0`+ detik
    }
    
    if (menit < 10) {
      menit = `0` + menit
    }

    displayCountdown(`${menit}: ${detik}`)
    seconds--
  },500)
};
module.exports = {
  timer
};
