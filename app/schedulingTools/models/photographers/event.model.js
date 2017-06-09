var mongoose = require('mongoose');
mongoose.Promise = Promise;

var Schema = mongoose.Schema;

var Event = new Schema ({
	event: {
		type: String
	},
    photographer: [{
		type: Schema.Types.ObjectId,
		ref: 'Photographer'
	}],
})

var Event = mongoose.model('Event', Event);

module.exports = Event;