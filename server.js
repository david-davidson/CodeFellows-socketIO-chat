'use strict';

// Server config
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('port', process.env.PORT || 3000);
server.listen(app.get('port'), function() {
    console.log('Listening on: ' + app.get('port'));
});

app.use(express.static(__dirname + '/static'));

// Routers
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Event handlers
io.on('connection', function() {
    console.log('on connection');
});