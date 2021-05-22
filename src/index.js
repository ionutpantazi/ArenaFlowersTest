fetch("../node/united.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data.results));

import http from 'http';

http.createServer(function (req, res) {
   res.write('Hello World!'); //write a response to the client
   res.end(); //end the response
 }).listen(8080); //the server object listens on port 8080