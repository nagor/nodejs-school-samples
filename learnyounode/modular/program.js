var readdirFiltered = require('./filtered-ls');
var dir = process.argv[2];
var filter = process.argv[3];
readdirFiltered(dir, filter, function(err, list){
	if(err){
		console.log(err);
		return;
	}
	list.forEach(function(file){
		console.log(file);
	});
});