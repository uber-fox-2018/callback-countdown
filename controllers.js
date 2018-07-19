const { displayCountdown } = require("./views");


function timer(sec){
  let count = setInterval(function() {
    displayCountdown(convert(sec))
    sec--
      if (sec === -1){
        clearInterval(count)
      }
  },500)
}

function convert(sec){
  let minute = Math.floor(sec / 60)
  let second = Math.floor(sec % 60)

  if (minute < 10){
    var minutes = '0' + minute
  }else {
    minutes = minute 
  }

  if (second < 10){
    var seconds = '0' + second
  }else {
    seconds = second
  }
  return `${minutes} : ${seconds}`
}

module.exports = {
  timer
}