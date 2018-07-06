var http = require('http');
var date = require('./02-my-custom-module');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Date: ' + date.myDate());	
	res.end();
}).listen(8000);
