var five = require("johnny-five");
var board = new five.Board({
	port: '/dev/cu.usbmodem14111',
});
let num = 99;
board.on("ready", function () {
	var write = (message) => {
		console.log(`Send "${message} to Display`);
		this.i2cWrite(0x09, message);
	};
	this.i2cConfig();
	this.repl.inject({ write });
	setInterval(function(){
		num > 99 ? num = 10 : num++;
		write(num)}, 1000)
	// write(0);
});