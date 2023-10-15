import { DefaultEventsMap } from 'socket.io/dist/typed-events';

import { Socket, io } from 'socket.io-client';

type SocketType = Socket<DefaultEventsMap, DefaultEventsMap>;

let socket: SocketType | null = null;

function establishSocket(): Promise<SocketType | null> {
  const s = io('ws://127.0.0.1:3000');

  return new Promise((resolve) => {
    console.log('connect to server :>> ');
    s.on('connect', () => {
      resolve(s);
    });

    s.on('disconnect', () => {
      resolve(null);
    });
  });
}

async function getSocket() {
  if (!socket) {
    socket = await establishSocket();
  }
  return socket!;
}

export async function runAdd() {
  const s = await getSocket();
  s.emit('runAdd', 1, 2, (v: any) => {
    console.log('v :>> ', v);
  });
}
