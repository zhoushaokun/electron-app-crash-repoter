import { IUGitDomain } from './type';

export class AddPlugin {
    // eslint-disable-next-line class-methods-use-this
    public active(ugitDomain: IUGitDomain) {
        ugitDomain.registerMethod<[number, number]>('runAdd', (a, b) => a + b);
    }
}
