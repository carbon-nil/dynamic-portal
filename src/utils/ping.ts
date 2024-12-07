import p from "ping";

export function ping(host: string) {
    return new Promise<boolean>((resolve) => {
        p.sys.probe(host, (isAlive: boolean | null) => {
            resolve(isAlive || false);
        });
    });
}
