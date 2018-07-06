var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){
	fs.readFile('users.json', function(err, data){
		res.writeHead(200, {'Content-Type': 'application/json'});		
		const query = url.parse(req.url, true).query;
		res.write('id:' + query.id);
		res.write('name:' + query.name);
		res.write(data);
		res.end();
	});
}).listen(8000);
