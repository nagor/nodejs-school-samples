
function readdirFiltered(dir, filter, callback) {
	var fs = require('fs');
	var path = require('path');	
	filter = '.' + filter;


	fs.readdir(dir, function(err, list){
		if(err){
			callback(err);
			return;
		}
		var result = [];
		for (var i = 0; i < list.length; i++) {
			var file = list[i];

			var extension = path.extname(file);

			if(extension === filter){
				result.push(file);
			}
		}

		callback(null, result);
	});
}

module.exports = readdirFiltered;