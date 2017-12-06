const five = require('johnny-five');
// const request = require('request');

// const apiEndpoint = process.env.API_ENDPOINT || 'http://localhost:8080/';
// const tableID = process.env.TABLE_ID;

const board = new five.Board();

const pinA = new five.Pin(2);
const pinB = new five.Pin(3);
const pinC = new five.Pin(4);
const pinD = new five.Pin(5);
const pinE = new five.Pin(6);
const pinF = new five.Pin(7);
const pinG = new five.Pin(8);
const D1 = new five.Pin(9);
const D2 = new five.Pin(10);
const D3 = new five.Pin(11);
const D4 = new five.Pin(12);

board.on("ready", function () {
	D1.high();
	D2.high();
	D3.high();
	D4.high();

	setNumber(0)

});


function setNumber(number) {
	switch (number) {
		case 0:
			pinA.high()
			pinB.high()
			pinC.high()
			pinD.high()
			pinE.high()
			pinF.high()
			pinG.high()
			break;
		case 1:
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
		case 6:
			break;
		case 7:
			break;
		case 8:
			break;
		case 9:
			break;
	}
}
