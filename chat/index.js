var express =  require('express');
var http =  require('http');
var socket =  require('socket.io');
var fs = require('fs');
var app = express();
app.get('/',function(req,res){

    
	  res.sendFile(__dirname + '/index.html'); 
});
var server = http.Server(app).listen(3000);
var io = socket(server);
io.on('connection',function(socket) {

	
     socket.on('chat-in', function (data) {
	        io.emit('chat-out',data);
	  });

     socket.emit('chat-out','Test');

});



