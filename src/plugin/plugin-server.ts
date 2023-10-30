// import { Server } from 'socket.io';

// type FunctionType = (val: number) => void;

// export function initServer() {
//   const io = new Server();
//   io.on('connection', (socket) => {
//     console.log('connect to client :>> ');

//     socket.on('runAdd', (a: number, b: number, callback: FunctionType) => {
//       console.log('args :>> ', a, b, callback);
//       callback(a + b);
//     });
//   });
//   io.on('disconnect', () => {
//     console.log('Disconnected from');
//   });
//   io.listen(3000);
// }
