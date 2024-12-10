import fs from "fs";
import http from "http";
import path from "path";

import { getHTML } from "../utils/getHTML";
import { log } from "../utils/logOutput";
import { parseRequest } from "../utils/parseRequest";
import { checkPing, redirectServer, parseQuery } from "./redirect";

export function runServer(
    port: number,
    config: { rootHost: string; childHost: string[] }
) {
    const server: http.Server = http.createServer(
        (req: http.IncomingMessage, res: http.ServerResponse) => {
            req.setEncoding("utf-8");
            const data = parseRequest(req);
            const [relativePath, queryString] = data.url
                .replace(/^\//, "")
                .split("?", 2);
            const query = queryString
                ? queryString
                      .split("&")
                      .reduce((acc: Record<string, string>, cur: string) => {
                          const [key, value] = cur.split("=");
                          acc[key] = value;
                          return acc;
                      }, {})
                : {};
            const parsedQuery = queryString ? parseQuery(queryString) : {};
            log(
                `${data.Host}/${relativePath} : ${JSON.stringify(query)} ${JSON.stringify(parsedQuery)}`,
                "Debug"
            );

            if (data.Host !== config.rootHost) {
                if (config.childHost.some((host) => host === data.Host)) {
                    checkPing(data.Host.split(":", 2)[0])
                        .then((isAlive: boolean) => {
                            if (isAlive) {
                                redirectServer(
                                    res,
                                    data.Host,
                                    relativePath,
                                    query
                                );
                            } else {
                                redirectServer(
                                    res,
                                    config.rootHost,
                                    "fallback.html",
                                    Object.assign(
                                        { h: data.Host, p: relativePath },
                                        parsedQuery
                                    ),
                                    true
                                );
                            }
                        })
                        .catch((err: Error) => {
                            log(`Error pinging host: ${err.message}`, "Error");
                            res.writeHead(500, {
                                // eslint-disable-next-line @typescript-eslint/naming-convention
                                "Content-Type": "text/plain",
                            });
                            res.end("Internal Server Error");
                        });
                } else {
                    res.writeHead(404, {
                        // eslint-disable-next-line @typescript-eslint/naming-convention
                        "Content-Type": "text/plain",
                    });
                    res.end("Not Found");
                }
                return;
            }

            if (relativePath === "") {
                res.writeHead(303, {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    "Content-Type": "text/html",
                });
                res.end(
                    '<html><head><meta http-equiv="refresh" content="0;url=/index.html"></head></html>'
                );
                return;
            } else if (relativePath === "api/redirect") {
                res.writeHead(200, {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    "Content-Type": "text/event-stream",
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    Connection: "keep-alive",
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    "Cache-Control": "no-cache",
                });
                res.write("data: connected\n\n");

                const loop = setInterval(() => {
                    if (parsedQuery.h !== null) {
                        checkPing(parsedQuery.h.split(/:/, 2)[0])
                            .then((isAlive: boolean) => {
                                if (isAlive) {
                                    res.write("data: redirect\n\n");
                                    res.end();
                                    clearInterval(loop);
                                } else {
                                    res.write("data: ping\n\n");
                                }
                            })
                            .catch((err: Error) => {
                                log(
                                    `Error pinging host: ${err.message}`,
                                    "Error"
                                );
                                res.writeHead(500, {
                                    // eslint-disable-next-line @typescript-eslint/naming-convention
                                    "Content-Type": "text/plain",
                                });
                                res.end("Internal Server Error");
                                clearInterval(loop);
                            });
                    }
                }, 5000);
                return;
            } else if (
                !fs.existsSync(
                    path.join(process.cwd(), "resources", relativePath)
                )
            ) {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("Not Found");
                return;
            }

            getHTML(path.join(process.cwd(), "resources", relativePath))
                .then((content) => {
                    res.end(content);
                })
                .catch((err: Error) => {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Internal Server Error");
                    log(`Error reading file: ${err.message}`, "Error");
                });
        }
    );

    server.listen(port);
    log(`Server is running on port ${port}`);
}
