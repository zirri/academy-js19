const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/html/index.html');
})

//socket
io.on('connection', (socket)=>{
    console.log('a user connected');
    
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message',(message)=>{
        console.log(message);
        io.emit('chat message',message);
    });
});

//
const port = process.env.PORT || 3001;
server.listen(port, () =>{
    console.log("Listenening to "+port)
});