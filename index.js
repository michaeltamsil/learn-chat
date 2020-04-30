const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
})

io.on('connection',(socket) => {
    console.log('a user connected');
    //rooms
    
    socket.join('employee')
    socket.join('customer service', () =>{
        let rooms = Object.keys(socket.rooms);
        console.log(rooms);
        socket.to('customer service').on
    });
    socket.emit('test', 'try to emit')



    socket.on('disconnect',() => {
        console.log('a user is disconnected')
    })

    socket.on('chat message', (id, msg) => {
        console.log(socket);
        console.log('message : ' + msg)
        io.emit('chat message', msg);
    })
});


http.listen(4002, () => {
    console.log('listening on port 4000');
})