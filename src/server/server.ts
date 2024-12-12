import fs from "fs";
import http from "http";
import path from "path";

import { getHTML } from "../utils/getHTML";
import { log } from "../utils/logOutput";
import { parseRequest } from "../utils/parseRequest";
import { checkPing, redirectServer, parseQuery } from "./redirect";

export function runServer(
    root: { name: string; port: number },
    child: {
        name: string;
        port: number;
        alias: { name: string; port: number } | undefined;
    }[]
) {
    const server: http.Server = http.createServer(
        (req: http.IncomingMessage, res: http.ServerResponse) => {
            // get request data
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

            // check if the host is the root host
            // if not, check if the host is a child host
            // if not, return 404
            if (
                data.Host.split(/:/, 2)[0] !== root.name ||
                Number(data.Host.split(/:/, 2)[1] || 80) !== root.port
            ) {
                const target =
                    child.find(
                        (host) =>
                            host.name +
                                (host.port !== 80 ? ":" + host.port : "") ===
                            data.Host
                    ) || undefined;
                const targetAlias =
                    target?.alias?.name +
                    (target?.alias?.port !== 80
                        ? ":" + target?.alias?.port
                        : "");
                if (targetAlias !== undefined) {
                    // check if the host is alive
                    // if so, return the response to the client
                    // if not, redirect to the root host
                    checkPing(targetAlias)
                        .then((isAlive: boolean) => {
                            if (isAlive) {
                                log(
                                    `Proxying request to ${targetAlias}`,
                                    "Debug"
                                );
                                http.get(
                                    `http://${targetAlias}`,
                                    (proxyRes) => {
                                        res.writeHead(
                                            proxyRes.statusCode || 200,
                                            proxyRes.headers
                                        );
                                        proxyRes.pipe(res, { end: true });
                                    }
                                ).on("error", (err) => {
                                    log(
                                        `Error proxying request: ${err.message}`,
                                        "Error"
                                    );
                                    res.writeHead(500, {
                                        // eslint-disable-next-line @typescript-eslint/naming-convention
                                        "Content-Type": "text/plain",
                                    });
                                    res.end("Internal Server Error");
                                });
                            } else {
                                redirectServer(
                                    res,
                                    root.name +
                                        (root.port !== 80
                                            ? ":" + root.port
                                            : ""),
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
                    log(`Wrong host connection: ${data.Host}`, "Error");
                    res.writeHead(404, {
                        // eslint-disable-next-line @typescript-eslint/naming-convention
                        "Content-Type": "text/plain",
                    });
                    res.end("Not Found");
                }
                return;
            }

            // check if the path is empty
            // if so, redirect to the index page
            if (relativePath === "") {
                res.writeHead(303, {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    "Content-Type": "text/html",
                });
                res.end(
                    '<html><head><meta http-equiv="refresh" content="0;url=/index.html"></head></html>'
                );
                return;
                // check if the path is api/redirect
                // if so, return the event stream
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

                // check if the host is alive
                // if so, redirect to the host
                const loop = setInterval(() => {
                    if (parsedQuery.h !== null) {
                        log(`Pinging to ${parsedQuery.h}`, "Debug");
                        http.get(`http://${parsedQuery.h}`, (proxyRes) => {
                            if ((proxyRes.statusCode || 404) < 400) {
                                res.write("data: redirect\n\n");
                                res.end();
                                clearInterval(loop);
                            } else {
                                res.write("data: ping\n\n");
                            }
                        }).on("error", (err) => {
                            log(
                                `Error proxying request: ${err.message}`,
                                "Error"
                            );
                            res.writeHead(500, {
                                // eslint-disable-next-line @typescript-eslint/naming-convention
                                "Content-Type": "text/plain",
                            });
                            res.end("Internal Server Error");
                        });
                    }
                }, 5000);
                return;
                // check if the file exists
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

            // return the file content
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

    server.listen(root.port);
    log(`Server is running on port ${root.port}`);
}
