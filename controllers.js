const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var countdown = setInterval(function(){
    if(seconds < 0){
      clearInterval(countdown)
    }else{
      var second = seconds%60
      var minute = Math.floor(seconds/60)
      // if(minute<10){
      //   minute = "0"+minute
      // }
      // if(second<10){
      //   second = "0"+second
      // }
    }
    seconds--
    displayCountdown(`${minute}:${second}`)
  },1000)
};

module.exports = {
  timer
};
timer(10)
// console.log(timer)
