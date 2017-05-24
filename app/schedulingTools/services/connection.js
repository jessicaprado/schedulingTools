var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/schedulingTools');
var db = mongoose.connection;

db.on('error', function(error){
	console.log(error)
});

db.once('open', function(){
	console.log('Ready to start some ish')
});

module.exports = db;