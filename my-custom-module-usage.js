var http = require('http');
var date = require('./my-custom-module');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Date: ' + date.myDate());	
	res.end();
}).listen(8000);