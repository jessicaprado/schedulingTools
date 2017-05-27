var mongoose = require('mongoose');
mongoose.Promise = Promise;

var Schema = mongoose.Schema;

var Photographer = new Schema ({
	event: {
		type: String
	},
    categories: [{
		type: Schema.Types.ObjectId,
		ref: 'Categories'
	}],
})

var Photographer = mongoose.model('Photographer', Photographer);

module.exports = Photographer;