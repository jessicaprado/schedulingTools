var table = require('../app/schedulingTools/libraries/photographers.js');

module.exports = function(app) {
    app.get('/api/table', function(req, res) {
        res.send(table);
    });
}