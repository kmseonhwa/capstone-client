declare module 'querystring' {
    export function stringify(val: object): string;
    export function parse(val: string): object;
}
declare module 'sockjs-client';
declare global {
    interface Crypto {
        randomUUID: () => string;
    }
}
export {};
