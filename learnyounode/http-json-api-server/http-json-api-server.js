var http = require('http');
var url = require('url');
var port = process.argv[2];

function formatTimeISO(dateTimeISO, res){
	var date = new Date(dateTimeISO);
	var data = { 
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	};
	var json = JSON.stringify(data);
	return jsonResponse(res, json);
}

function formatUnixEpochTime(dateTimeISO, res){
	var date = new Date(dateTimeISO);
	var data = { 
		unixtime: date.getTime() //unix epoch time: milliseconds since midnight Jan 1, 1970
	};
	var json = JSON.stringify(data);
	return jsonResponse(res, json);
}

function jsonResponse(res, data){
	res.writeHead(200, {'content-type': 'application/json'});
	return res.end(data);
}

var server = http.createServer(function(req, res){
	if(req.method != 'GET')
		return res.end('GET accepted only!');

	var reqObj = url.parse(req.url, true);

	if(reqObj.pathname === '/api/parsetime')
		return formatTimeISO(reqObj.query.iso, res);
	else if(reqObj.pathname === '/api/unixtime')
		return formatUnixEpochTime(reqObj.query.iso, res);

	req.writeHead(404);
	return res.end();
});

server.listen(port);