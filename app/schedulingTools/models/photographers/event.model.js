var mongoose = require('mongoose');
mongoose.Promise = Promise;

var Schema = mongoose.Schema;

var Categories = new Schema ({
	event: {
		type: String
	},
    photographer: [{
		type: Schema.Types.ObjectId,
		ref: 'Photographer'
	}],
})

var Categories = mongoose.model('Categories', Categories);

module.exports = Categories;