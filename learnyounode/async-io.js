var fs = require('fs');
var path = process.argv[2];
fs.readFile(path, function(error, buffer){
	if(error){
		console.log(error);
		return;
	}
	var string = buffer.toString();
	var rows = string.split('\n');
	console.log(rows.length - 1);
});