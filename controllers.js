const displayCountdown= require("./views");
function sleep (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}
const timer = seconds => {
  // Your code here...
  var input = process.argv[2]
  var temp = input
  var menit = parseInt(input/60,10)
  var detik = parseInt(input%60,10)
  for(let i = 0 ; i <= temp ; i++){
     if(detik === 0){
      sleep()
      var count = `0${menit}:00`
      displayCountdown(count)
      detik = 59
      menit-=1
    }else if(detik >= 10){
      sleep()
      var waktu = `0${menit}:${detik}`
      displayCountdown(waktu)
      detik--
    }else if(detik < 10){
      sleep()
      var time = `0${menit}:0${detik}`
      displayCountdown(time)
      detik--
    }
  }
    
  
  
};

module.exports = timer
