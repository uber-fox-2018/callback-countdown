const { displayCountdown } = require("./views");

const timer = seconds => {
	// Your code here...

	let time = setInterval(function() {
		if (seconds >= 0) {
			displayCountdown(converter(seconds));
			seconds --
		} else {
			clearInterval(time);
		}
	}, 1000)};

var converter = function(detik) {
	let minute = (String(Math.floor(detik / 60)));
	let second = (String(detik % 60));

	if (minute < 10) {
		if (second < 10) {
			return `0${minute}:0${second}`
		} else {
			return `0${minute}:${second}`
		}
	} else {
		if (second < 10) {
			return `${minute}:0${second}`
		} else {
			return `${minute}:${second}`    
    	}
  	}
}

module.exports = {
  timer
};
