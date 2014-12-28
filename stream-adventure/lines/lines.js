var split = require('split');
var counter = 1;

process.stdin.pipe(split()).on('data', function(line){	
	if(counter % 2 === 0){ //even 	
		line = line.toUpperCase();
	} else {
		line = line.toLowerCase();
	}
	counter += 1;
	console.log(line);
});