import http from "http";

import { log } from "../utils/logOutput";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-expect-error */
import URLCompressor from "../../lib/url-comp";

// check if the host is alive
export function checkPing(host: string): Promise<boolean> {
    // send http request to the child host
    // if the host is alive, the promise will resolve to true
    return new Promise((resolve) => {
        const req = http.get(host, (res) => {
            resolve(res.statusCode !== undefined);
        });

        req.on("error", (error: Error) => {
            log(`Error checking host: ${error.message}`, "Error");
            resolve(false);
        });
        req.end();
    });
}

// redirect to the given host, path and query
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

// compress and expand query strings
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
