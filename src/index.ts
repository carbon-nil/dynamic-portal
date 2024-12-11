import { promises as fsp } from "fs";
import path from "path";

import { log } from "./utils/logOutput";
import { runServer } from "./server/server";
import { exit } from "process";

function run() {
    fsp.readFile(path.join(process.cwd(), "config.json"), "utf-8")
        .then((data) => {
            // Parse the config file
            const config = JSON.parse(data) as {
                rootHost: string;
                childHost: string[];
            };
            const port = parseInt(config.rootHost.split(/:/, 2)[1], 10) || 80;

            // Start the server
            runServer(port, config);
        })
        .catch(async (err: Error) => {
            // Create the log file
            await fsp.writeFile(
                path.join(process.cwd(), "config.json"),
                `{"version":"${process.env.npm_package_version}","rootHost":"localhost","childHost":[]}`
            );

            // Log the error and exit
            log(`Error reading config file: ${err.message}`, "Error");
            exit(1);
        });
}

void run();
