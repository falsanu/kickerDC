
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

	let counter = 0;
	// Create a new `motion` hardware instance.
	var motion = new five.Motion({
		pin:7,
		freq:20
	});

	// "calibrated" occurs once, at the beginning of a session,
	motion.on("calibrated", function() {
		console.log("calibrated");
	});

	// "motionstart" events are fired when the "calibrated"
	// proximal area is disrupted, generally by some form of movement
	motion.on("motionstart", function() {
		console.log("motionstart");
	});

	// "motionend" events are fired following a "motionstart" event
	// when no movement has occurred in X ms
	motion.on("motionend", function() {
		console.log("motionend");
	});

});