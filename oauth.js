/* jshint esversion:6 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('app'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/app/index.html');
});

var server = app.listen(3000, () => {
    console.log('Listening on port', server.address().port);
});
