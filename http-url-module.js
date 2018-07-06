var http = require('http');
var url = require('url');

http.createServer (function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	const query = url.parse(req.url, true).query;	
	res.end(query.a);
}).listen(8000);