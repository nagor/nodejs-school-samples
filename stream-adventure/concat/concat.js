var concat = require('concat-stream');

var concater = concat(function(data){
	var result = data.toString().split("").reverse().join("");
	console.log(result);
})

process.stdin.pipe(concater);