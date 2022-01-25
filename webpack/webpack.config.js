const path = require('path');

module.exports={
	mode:'development',
	entry:{
		index:'./src/js/1.js',
		admin:'./src/js/2.js'
	},
	output:{
		path:path.resolve(__dirname, 'build'),
		filename:'[name].min.js'

	}

};
