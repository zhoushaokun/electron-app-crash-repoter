import { Server } from 'socket.io';

export function initServer() {
  const io = new Server();
  io.on('connection', (socket) => {
    console.log('connect to client :>> ');

    socket.on('runAdd', (a: number, b: number, callback) => {
      console.log('args :>> ', a, b, callback);
      (callback as Function)(a + b);
    });
  });
  io.on('disconnect', () => {
    console.log('Disconnected from');
  })
  io.listen(3000);
}
