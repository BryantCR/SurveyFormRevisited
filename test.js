const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

const server = app.listen(8080);
const io = require('socket.io')(server);

io.on( 'connection' , function( socket ){
	console.log("You have reached the server, welcome!");
    //console.log(socket);

    // socket.on( 'greeting', function( data ) {//Le enviamos la información a socket
	// 	let info = {
	// 		message : 'Hello there ${data.name} nice to have you here'
	// 	}
	// 	//emit se comunica con nuesto index.js
	// 	socket.emit('information', info);
	// });

    socket.on('information', function(info){
        socket.emit('showInfo', info)
        console.log(info);
    });

})
