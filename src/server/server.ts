import fs from "fs";
import http from "http";
import path from "path";

import { getHTML } from "../utils/getHTML";
import { log } from "../utils/logOutput";
import { parseRequest } from "../utils/parseRequest";
import { ping } from "./../utils/ping";

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
            log(
                `${data.Host}/${relativePath} : ${JSON.stringify(query)}`,
                "Debug"
            );

            if (data.Host !== config.rootHost) {
                if (config.childHost.some((host) => host === data.Host)) {
                    ping(data.Host.split(":", 2)[0])
                        .then((isAlive: boolean | null) => {
                            if (isAlive) {
                                res.writeHead(302, {
                                    // keep false to prevent multiple redirects
                                    // eslint-disable-next-line @typescript-eslint/naming-convention
                                    Location: `http://${config.rootHost}/fallback.html?host=${data.Host}${relativePath !== "" ? "&path=" + relativePath : ""}`,
                                    // Location: `http://${data.Host}/${relativePath}`,
                                });
                            } else {
                                res.writeHead(302, {
                                    // eslint-disable-next-line @typescript-eslint/naming-convention
                                    Location: `http://${config.rootHost}/fallback.html?host=${data.Host}${relativePath !== "" ? "&path=" + relativePath : ""}`,
                                });
                            }
                            res.end();
                        })
                        .catch((err: Error) => {
                            res.writeHead(500, {
                                // eslint-disable-next-line @typescript-eslint/naming-convention
                                "Content-Type": "text/plain",
                            });
                            res.end("Internal Server Error");
                            log(`Error pinging host: ${err.message}`, "Error");
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
            } else if (
                !fs.existsSync(path.join(process.cwd(), "dist", relativePath))
            ) {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("Not Found");
                return;
            }

            getHTML(path.join(process.cwd(), "dist", relativePath))
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
