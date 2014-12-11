var fs = require('fs');
var path = process.argv[2];
var buffer = fs.readFileSync(path);
var str = buffer.toString();
var rows = str.split('\n');

console.log(rows.length-1);