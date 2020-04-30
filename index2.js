// https://gist.github.com/crtr0/2896891
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
})

io.on('connection',(socket) => {
    console.log('a user connected');

    socket.on('disconnect',() => {
        console.log('a user is disconnected')
    })
    debugger;
    socket.join('room-customer-service', (a, b) => {
        debugger;
        socket.on('msg',(pesan) => {
            debugger;
            console.log(pesan)
        })
    });
    io.in('room-customer-service').emit('msg', 'hi there');

    socket.to('room-customer-service').emit('msg', "hi there, what can i help you");

    
});


http.listen(4002, () => {
    console.log('listening on port 4000');
})