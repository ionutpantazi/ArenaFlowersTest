const http = require('http');

function CORS(param) {
	const response = {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
		},
		body: JSON.stringify(param),
	};
	return response;
}

exports.handler = (event, context, callback) => {
	if (event.queryStringParameters.input) {
		const input = event.queryStringParameters.input;
		http.get("http://restcountries.eu/rest/v2/region/europe", function (response) {
			var apiResponse = "";
			response.on("data", function (data) {
				apiResponse += data;
			});
			response.on("end", function () {
				const parsedApi = JSON.parse(apiResponse);
				const countries = parsedApi.filter(item => {
					return item.name.toLowerCase().search(input ? input.toLowerCase() : "") !== -1;
				}).map(({ name, capital }) => ({ countryName: name, capitalCity: capital }));
				const result = { results: [...countries] };
				callback(null, CORS(result));
			});
		});
	}
};
