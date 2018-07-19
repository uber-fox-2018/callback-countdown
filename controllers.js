const { displayCountdown } = require("./views");

const timer = seconds => {
  let times = setInterval(function() {
    seconds -= 1
    displayCountdown(convertTime(seconds)) 
    if (seconds === 0) {
      clearInterval(times)
    }
  }, 1000)
};

const convertTime = seconds => {
  let minutes = Math.floor(seconds / 60)
  let second = Math.floor(seconds % 60)

  if (minutes < 10) {
    var menit = "0" + minutes
  } else {
    menit = minutes 
  }

  if (second < 10) {
    var detik = "0" + second
  } else {
    detik = second
  }

  return `${menit} : ${detik}`

}

module.exports = {
  timer
};
