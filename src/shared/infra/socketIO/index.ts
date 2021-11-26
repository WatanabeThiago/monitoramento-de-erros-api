import { Request } from 'express';

import http from 'http';
import { Server } from 'socket.io';

interface IConnectedUser {
  [key: string]: string;
}

const connectedUsers: IConnectedUser = {};

export default function socketIO(
  server: http.Server,
  request: Request,
): Server {
  console.log('[SOCKET.IO] Abrindo Socket...');
  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: '*',
      credentials: false,
    },
    transports: ['websocket', 'polling'],
  });

  io.on('connection', socket => {
    const { user_id } = socket.handshake.query;
    connectedUsers[user_id as string] = socket.id;

    socket.on('disconnect', () => {
      delete connectedUsers[user_id as string];
    });
  });

  request.io = {
    connectedUsers,
    server: io,
  };

  console.log('[SOCKET] Socket aberto.');
  return io;
}
