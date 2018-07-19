const  {displayCountdown}  = require("./views");

const timer = seconds => {
  
  
  var countDown = setInterval(function(){
    console.log(seconds);
    seconds--
    displayCountdown(seconds);
    if (seconds === 0) {
      // console.log("HAPPY CODING!!");
      clearInterval(countDown);
    }
  }, 1000);
};

module.exports = {
  timer
};

  // Your code here...
 
//setInterval(function(){ alert("Hello"); }, 3000);