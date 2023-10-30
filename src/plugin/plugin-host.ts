import { getSocket } from './plugin-client';
import { AddPlugin } from './plugins';
import { PluginMethod, SocketType } from './type';

const registerMethod = <T extends any[]>(
    name: string,
    func: PluginMethod<T>,
) => {
    getSocket().then((socket: SocketType) => {
        socket.on(name, (...args: any[]) => {
            console.log('name :>> ', name);
            console.log('args :>> ', args);
            func(...(args as T));
        });
    }).catch((e: Error) => {
        console.log(e);
    });
};

export class PluginHost {
    public static active() {
        // 获取所有插件
        const plugins = [new AddPlugin()];
        // 激活所有插件
        plugins.forEach((p) => {
            p.active({
                registerMethod,
            });
        });
    }
}
