const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  console.log('KEU CONNECT KORSE! ID:', socket.id);

  socket.on('message', (msg) => {
    console.log('Message peyechi:', msg);
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Keu chole geche');
  });
});

server.listen(3000, () => {
  console.log('SERVER CHOLCHE PORT 3000 E');
});