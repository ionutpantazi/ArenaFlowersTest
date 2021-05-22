"use strict";

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

fetch("../node/united.json").then(function (response) {
  return response.json();
}).then(function (data) {
  return console.log(data.results);
});

_http["default"].createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client

  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080