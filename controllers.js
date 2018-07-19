const  displayCountdown  = require("./views");

const timer = seconds => {
  setInterval(function(){displayCountdown.displayCountdown(1); }, 1000);
  
};

module.exports = {
  timer
};

//setInterval(function(){ alert("Hello"); }, 3000);