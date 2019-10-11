var http = require("http");

console.log(process.env);

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World\n');
}).listen(8080);

console.log('Server running');
