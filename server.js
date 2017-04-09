var express = require('express');
var app = express();
var bodyParser = require('body-parser')
PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

var getPhotographer = require("./api/get-photographer.js")(app);
var getAssist = require("./api/get-assist.js")(app);

app.listen(PORT, function() {
    console.log ("Listening in on PORT " + PORT);
})