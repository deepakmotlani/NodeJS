var http = require('http');
var url = require('url');

http.createServer (function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	const query = url.parse(req.url, true).query;	
	res.end('Value of query parameter id = ' + query.id);
}).listen(8000);
