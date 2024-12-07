import { promises as fsp } from "fs";
import path from "path";

import { log } from "./utils/logOutput";
import { runServer } from "./server/server";
import { exit } from "process";

function run() {
    fsp.readFile(path.join(process.cwd(), "config.json"), "utf-8")
        .then((data) => {
            const config = JSON.parse(data) as {
                rootHost: string;
                childHost: string[];
            };
            const port = parseInt(config.rootHost.split(/:/, 2)[1], 10) || 80;
            runServer(port, config);
        })
        .catch(async (err: Error) => {
            log(`Error reading config file: ${err.message}`, "Error");
            await fsp.writeFile(
                path.join(process.cwd(), "config.json"),
                `{"version":"${process.env.npm_package_version}","rootHost":"localhost","childHost":[]}`
            );
            exit(1);
        });
}

void run();
