var express = require('express');
var app = express();
var bodyParser = require('body-parser');
PORT = process.env.PORT || 3000;

var db = require('./app/schedulingTools/services/connection');
var Categories = require('./app/schedulingTools/models/photographers/categories.model.js');

app.use(express.static(__dirname + '/app'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

var getPhotographer = require('./routes/api/photographers/photographerCRUD.js')(app);
var getAssist = require('./routes/api//assists/assistCRUD.js')(app);

app.listen(PORT, function() {
    console.log ('Stalking you on ' + PORT);
})