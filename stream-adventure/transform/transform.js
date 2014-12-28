var map = require('through2-map');
var uppercaserer = map(function(chunk){
	return chunk.toString().toUpperCase();
});

process.stdin.pipe(uppercaserer).pipe(process.stdout);