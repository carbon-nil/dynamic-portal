import ping from "ping";
import http from "http";

import { log } from "../utils/logOutput";

export function checkPing(host: string): Promise<boolean> {
    return new Promise<boolean>((resolve) =>
        ping.sys.probe(host, (isAlive: boolean | null) => {
            resolve(isAlive || false);
        })
    );
}

export function redirectServer(
    res: http.ServerResponse,
    host: string,
    path: string
) {
    log(`Redirecting to ${host}${path ? "/" + path : ""}`, "Debug");
    res.writeHead(302, {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Location: `http://${host}${path ? "/" + path : ""}`,
    });
    res.end();
}
