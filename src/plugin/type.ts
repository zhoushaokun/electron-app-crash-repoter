import { DefaultEventsMap } from 'socket.io/dist/typed-events';

import { Socket } from 'socket.io-client';

export type PluginMethod<T extends any[]> = (...args: T) => void;

export interface IUGitDomain {
    registerMethod: <T extends any[]>(
        name: string, func: PluginMethod<T>
    ) => void;
}

export type SocketType = Socket<DefaultEventsMap, DefaultEventsMap>;
