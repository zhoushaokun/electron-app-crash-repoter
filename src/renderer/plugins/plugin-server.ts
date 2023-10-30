import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

// type FunctionType = (val: number) => void;
export type SocketType = Socket<DefaultEventsMap, DefaultEventsMap>;

export class PluginServer {
    private server: Server | null = null;

    private socket: SocketType | null = null;

    public startServer = () => {
        const io = new Server();
        io.on('connection', (socket) => {
            console.log('connection :>> ');
            this.socket = socket;
        });
        io.on('disconnect', () => {
            console.log('Disconnected from');
        });
        io.listen(3000);
        this.server = io;
    };

    public executeMethod<T extends any[]>(name: string, ...args: T[]) {
        console.log('name, args :>> ', name, args);
        this.socket?.emit(name, args[0], args[1]);
    }
}

// export function initServer() {
//     const io = new Server();
//     io.on('connection', (socket) => {
//         console.log('connect to client :>> ');

//         socket.on('runAdd', (a: number, b: number, callback: FunctionType) => {
//             console.log('args :>> ', a, b, callback);
//             callback(a + b);
//         });
//     });
//     io.on('disconnect', () => {
//         console.log('Disconnected from');
//     });
//     io.listen(3000);
// }
