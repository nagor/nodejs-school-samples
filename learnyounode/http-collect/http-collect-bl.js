var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function(response){
	response.pipe(bl(function(err, data){
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
});