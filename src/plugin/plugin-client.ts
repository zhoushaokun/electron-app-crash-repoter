import { io } from 'socket.io-client';
import { SocketType } from './type';

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

export async function getSocket(): Promise<SocketType> {
    if (!socket) {
        socket = await establishSocket();
    }
    return socket!;
}
