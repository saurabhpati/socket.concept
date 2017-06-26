var app = require('express')(),
    server = require('http').Server(app),
    io = require('socket.io')(server);

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.use('/clientScript.js', function (request, response) {
    response.sendFile(__dirname + '/clientScript.js');
})

io.on('connection', function (socket) {
    console.log('A user connected');
})

server.listen(3000, 'localhost', function () {
    console.log('listening on http://localhost:3000');
})