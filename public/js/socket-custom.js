const socket = io();

// Listen
socket.on('connect', () => {
    console.log('Connected to server'); // world
});

socket.on('disconnect', () => {
    console.log('Disconnected from server'); // world
});

// Send information
socket.emit('sendMessage', {
    user: 'Sergio',
    message: 'Hello World!'
}, (response) => {
    console.log(response)
});

// Listen information
socket.on('sendMessage', (message) => {
    console.log(message);
})