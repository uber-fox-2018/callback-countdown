const { displayCountdown } = require("./views");

const timer = seconds => {
  
  let count = setInterval(function(){
    let secondss = parseInt(seconds%60,10)
    let minutes = parseInt(seconds/60,10)
    if (minutes<10 && secondss<10){
      displayCountdown(`0${minutes} : 0${secondss}`)      
    } else if(minutes<10 && secondss>=10) {
      displayCountdown(`0${minutes} : ${secondss}`)
    } else if (minutes>=10 && secondss>=10){
      displayCountdown(`${minutes} : ${secondss}`)
    } else if (minutes>=10 && secondss<10){
      displayCountdown(`${minutes} : 0${secondss}`)
    } 
    if (seconds === 0){
      clearInterval(count)
    }
    seconds--
  },1000)
};



module.exports = {
  timer
};
