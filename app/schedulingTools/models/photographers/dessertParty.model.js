var mongoose = require('mongoose');
mongoose.Promise = Promise;

var Schema = mongoose.Schema;

var dessertParty = new Schema ({
    photographer: {
		type: String
	},
	lastShot: {
		type: String
	},
})

var Bridal = mongoose.model('Bridal', Bridal);

module.exports = Bridal;