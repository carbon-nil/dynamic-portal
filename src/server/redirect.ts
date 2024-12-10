import ping from "ping";
import http from "http";

import { log } from "../utils/logOutput";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-expect-error */
import URLCompressor from "../../lib/url-comp";

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
    path: string = "",
    query: Record<string, string> = {},
    compress: boolean = false
) {
    const queryString = compress
        ? compressQuery(query)
        : Object.keys(query).join("&");

    log(
        `Redirecting to ${host}${path.length ? "/" + path : ""}${queryString.length ? "?" + queryString : ""}`,
        "Debug"
    );
    res.writeHead(302, {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Location: `http://${host}${path.length ? "/" + path : ""}${queryString.length ? "?" + queryString : ""}`,
    });
    res.end();
}

function compressQuery(query: Record<string, string>): string {
    return Object.keys(query)
        .map((key) => `${key}=${URLCompressor.compress(query[key])}`)
        .join("&");
}

export function parseQuery(query: string): Record<string, string> {
    return query
        .split("&")
        .reduce((acc: Record<string, string>, cur: string) => {
            const [key, value] = cur.split("=");
            acc[key] = URLCompressor.expand(value);
            return acc;
        }, {});
}
