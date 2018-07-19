const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var intervalId= setInterval(function(){
    if(seconds >= 0){
      displayCountdown(convert(seconds))
      seconds--
    }else{
      clearInterval(intervalId)
    }
    },1000)

};

function convert(seconds) {
  var menit = Math.floor(seconds/60)
  var second = seconds%60  
  if(menit === 0 && second < 10){
    return `0${menit} : 0${second}`
  }else if(second < 10 && menit !== 0){
    return `${menit}:0${second}`
  }else if(menit === 0 && second >= 10){
    return `0${menit}:${second}`
  }else{
    return `${menit} : ${second}`
  }

}



module.exports = {
  timer
};
