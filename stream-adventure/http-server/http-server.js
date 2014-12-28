var http = require('http');
var map = require('through2-map');
var port = process.argv[2];



var server = http.createServer(function(req, res){
	if(req.method !== 'POST'){
		res.writeHead(400);
		return res.end();
	}

	var uppercaserer = map(function(chunk){
		console.log(chunk.toString());
		return chunk.toString().toUpperCase();
	});

	req.pipe(uppercaserer).pipe(res);

});

server.listen(port);
console.log('Server started at ' + port);