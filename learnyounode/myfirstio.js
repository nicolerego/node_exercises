var fs = require('fs');

var content = fs.readFileSync(process.argv[2]);
var numOfLines = content.toString().split('\n').length -1;

console.log(numOfLines);