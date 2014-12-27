var http = require('http');
var map = require('through2-map');
var port = process.argv[2];


var server = http.createServer(function(req, res){

	if(req.method != 'POST')
		return res.end('POST accepted only!');

	var uppercaserer = map(function(chunk){
		return chunk.toString().toUpperCase();
	});

	req.pipe(uppercaserer).pipe(res);
});

server.listen(port);