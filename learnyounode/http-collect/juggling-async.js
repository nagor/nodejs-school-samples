var http = require('http');
var bl = require('bl'); //buffed list package ('bl'), or 'concatStream' package can be used
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

function getUrl(url, callback) { 
	http.get(url, function(response){
		response.pipe(bl(function(err, data){
			if(err){
				return callback(err);
			}
			data = data.toString();		
			callback(null, data);
		}));
	});
}

var responses = [];
var counter = 0;
var urlsTorequest = 3;

//better to use 'async' or 'after' packages

function getIUrl(index){
	getUrl(process.argv[2 + index], function(err, data){
		responses[index] = data;
		counter++;
		if(counter == urlsTorequest){
			for (var i = 0; i < responses.length; i++) {
				console.log(responses[i]);
			};
		} 
	});
}

/*
getUrl(url1, function(err1, data1){
	console.log(data1);
	getUrl(url2, function(err2, data2){
		console.log(data2);
		getUrl(url3, function(err3, data3){
			console.log(data3);
		});
	});
});*/

for (var i = 0; i < urlsTorequest; i++) {
	getIUrl(i);
};


