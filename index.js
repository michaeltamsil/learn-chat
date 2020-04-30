const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
})

io.on('connection',(socket) => {
    console.log('a user connected');
    socket.join('room1');
    socket.on('disconnect',() => {
        console.log('a user is disconnected')
    })

    socket.on('chat message', (object) => {
        socket.to('room1').emit('chat message', {
            ...object,
            socketId: socket.id
        })
        
    })
});


http.listen(4002, () => {
    console.log('listening on port 4000');
})