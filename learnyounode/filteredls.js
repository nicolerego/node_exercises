var fs = require('fs')
var path = require('path')

//first argument file path
fs.readdir(process.argv[2], function (err, list){
	list.forEach(function (file){
		//second argument file extension
		if (path.extname(file) === "." + process.argv[3])
			console.log(file)
	})

});