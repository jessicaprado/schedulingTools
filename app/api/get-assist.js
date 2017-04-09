var table = require('../schedulingTools/libraries/assists.js');

module.exports = function(app) {
    app.get('/api/assists', function(req, res) {
        res.send(table);
    });
}