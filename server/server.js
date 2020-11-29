const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.use(express.static('public'));

process.env.PORT = process.env.PORT || 3000;

// Export to module.io
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

server.listen(process.env.PORT);