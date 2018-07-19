const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  setInterval(function(){
    if(seconds > 0){
      seconds--

      let jam = Math.floor(seconds/3600)
      let menit = Math.floor(seconds % 3600 / 60)
      let detik = Math.floor(seconds - jam * 3600 - menit * 60 )
      let time = `${jam} : ${menit} : ${detik}`

      displayCountdown(time)

    }else{

      clearInterval(seconds)

    }
  }, 700)


};

module.exports = {
  timer
};
