import http from "http";
import path from "path";
import fs from "fs";

import { log } from "../utils/logOutput";
import { parseHTML } from "../utils/parseHTML";
import { getHTML } from "../utils/getHTML";

export function runServer(port: number) {
    const server: http.Server = http.createServer(
        (req: http.IncomingMessage, res: http.ServerResponse) => {
            req.setEncoding("utf-8");
            const data = parseHTML(req);
            const [relativePath, queryString] = data.url
                .replace(/^\//, "")
                .split("?", 2);
            const query = queryString
                ? queryString
                      .split("&")
                      .reduce((acc: Record<string, string>, curr: string) => {
                          const [key, value] = curr.split("=");
                          acc[key] = value;
                          return acc;
                      }, {})
                : {};
            log(`${relativePath} / ${JSON.stringify(query)}`, "Debug");

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
