var table = require('../schedulingTools/libraries/photographers.js');

module.exports = function(app) {
    app.get('/api/photographers', function(req, res) {
        res.send(table);
    });
}