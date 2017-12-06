const five = require('johnny-five');
// const request = require('request');

// const apiEndpoint = process.env.API_ENDPOINT || 'http://localhost:8080/';
// const tableID = process.env.TABLE_ID;

const board = new five.Board();

let pinA;
let pinB;
let pinC;
let pinD;
let pinE;
let pinF;
let pinG;
let D1;
let D2;
let D3;
let D4;

board.on("ready", function () {

	pinA = new five.Pin(2);
	pinB = new five.Pin(3);
	pinC = new five.Pin(4);
	pinD = new five.Pin(5);
	pinE = new five.Pin(6);
	pinF = new five.Pin(7);
	pinG = new five.Pin(8);
	D1 = new five.Pin(9);
	D2 = new five.Pin(10);
	D3 = new five.Pin(11);
	D4 = new five.Pin(12);

	let i = 0;

	setInterval(()=>{
		if (i>9) {
			i = 0;
		}
		setActiveColumn(1,1,1,0)
		setNumber(i)
		i++;
	}, 500)
});

function setActiveColumn(column1 = 0, column2 = 0, column3 = 0, column4 = 0) {
	column1 ? D1.high() : D1.low();
	column2 ? D2.high() : D2.low();
	column3 ? D3.high() : D3.low();
	column4 ? D4.high() : D4.low();
}

function setNumber(number) {
	console.log('Set Number to ' + number);
	switch (number) {
		case 0:
			pinA.high()
			pinB.high()
			pinC.high()
			pinD.high()
			pinE.high()
			pinF.high()
			pinG.low()
			break;
		case 1:
			pinA.low()
			pinB.high()
			pinC.high()
			pinD.low()
			pinE.low()
			pinF.low()
			pinG.low()
			break;
		case 2:
			pinA.high()
			pinB.high()
			pinC.low()
			pinD.high()
			pinE.high()
			pinF.low()
			pinG.high()
			break;
		case 3:

			pinA.high()
			pinB.high()
			pinC.high()
			pinD.high()
			pinE.low()
			pinF.low()
			pinG.high()
			break;
		case 4:
			pinA.low()
			pinB.high()
			pinC.high()
			pinD.low()
			pinE.low()
			pinF.high()
			pinG.high()
			break;
		case 5:
			pinA.high()
			pinB.low()
			pinC.high()
			pinD.high()
			pinE.low()
			pinF.high()
			pinG.high()
			break;
		case 6:
			pinA.high()
			pinB.low()
			pinC.high()
			pinD.high()
			pinE.high()
			pinF.high()
			pinG.high()
			break;
		case 7:
			pinA.high()
			pinB.high()
			pinC.high()
			pinD.low()
			pinE.low()
			pinF.low()
			pinG.low()
			break;
		case 8:
			pinA.high()
			pinB.high()
			pinC.high()
			pinD.high()
			pinE.high()
			pinF.high()
			pinG.high()
			break;

		case 9:
			pinA.high()
			pinB.high()
			pinC.high()
			pinD.high()
			pinE.low()
			pinF.high()
			pinG.high()
			break;
	}
}


