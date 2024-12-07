import { IncomingMessage } from "http";

import { ParsedRequest } from "../types/ParsedRequest";

export function parseRequest(req: IncomingMessage): ParsedRequest {
    const res: ParsedRequest = {
        method: req.method || "",
        url: req.url || "",
        httpVersion: req.httpVersion || "",
    };

    let nextKey = undefined as string | undefined;
    for (const keyOrValue of req.rawHeaders) {
        if (nextKey === undefined) {
            nextKey = keyOrValue;
        } else {
            res[nextKey] = keyOrValue;
            nextKey = undefined;
        }
    }

    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
        res["body"] += body;
    });

    return res;
}
