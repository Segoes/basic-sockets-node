const { io } = require('../server');

io.on('connection', (socket) => {

    socket.emit('sendMessage', {
        user: 'Admin',
        message: 'Welcome'
    });

    // Listen client
    socket.on('sendMessage', (message, callback) => {
        console.log(message);


        socket.broadcast.emit('sendMessage', message);
        // if (message.user) {
        //     callback({ resp: 'Ok' });
        // } else {
        //     callback({ resp: 'Not Ok' });
        // }
    });


})