var five = require('johnny-five'),
	board, button;
const request = require('request');

const apiEndpoint = process.env.API_ENDPOINT || 'http://localhost:8080/';
const tableID = process.env.TABLE_ID;

board = new five.Board();

board.on("ready", function () {

// Create a new `button` hardware instance.
// This example allows the button module to
// create a completely default instance
	button = new five.Button(13);

// Inject the `button` hardware into
// the Repl instance's context;
// allows direct command line access
	board.repl.inject({
		button: button
	});

// Button Event API

// "down" the button is pressed
	button.on("down", function () {
		console.log("down");
		console.log("send Data to API")
		const path = `${apiEndpoint}/table/occupy/${tableID}`;
		console.log(`Sending Request to: ${path}`);
		request({
			url: path,
			method: 'GET'
		}, function (error, response, body) {
			if (error) {
				console.log(error.message);
			}
			if (!error && response.statusCode == 200) {
				console.log(response.statusCode)
			} else {
				console.log(body)
			}
		});

	});

//  "hold" the button is pressed for specified time.
//  defaults to 500ms (1/2 second)
//  set
	button.on("hold", function () {
		console.log("hold");
	});

// "up" the button is released
	button.on("up", function () {
		console.log("up");
	});
});
