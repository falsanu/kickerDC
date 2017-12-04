const request = require('request');

class Request {
	constructor() {
		this.apiEndpoint = process.env.API_ENDPOINT || null
	}

	async sendRequest(data) {
		if (!data.path) {
			throw new Error('Endpoint Path missing')
		}
		const apiEndpoint = this.apiEndpoint + data.path;

		request({
			url: apiEndpoint,
			method: 'GET'
		}, function (error, response, body){
			if (error) {
				console.log(error.message);
			}
			if (!error && response.statusCode == 200) {
				console.log(response.statusCode)
			}

		});
	}
}

module.exports = new Request()
