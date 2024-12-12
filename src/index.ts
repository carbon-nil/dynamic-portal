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
                hosts: {
                    name: string;
                    root?: boolean;
                    alias?: string;
                }[];
            };
            const rootHost = config.hosts.find((host) => host.root);
            const childHosts = config.hosts.filter((host) => !host.root);
            if (rootHost === undefined)
                throw new Error("No root host specified");
            const parsedConfig = {
                rootHost: {
                    name: rootHost.name.split(/:/, 1)[0],
                    port: Number(rootHost.name.split(/:/, 2)[1]) || 80,
                },
                childHosts: childHosts.map((host) => ({
                    name: host.name.split(/:/, 1)[0],
                    port: Number(host.name.split(/:/, 2)[1]) || 80,
                    alias: host.alias
                        ? {
                              name: host.alias.split(/:/, 2)[0],
                              port: Number(host.alias.split(/:/, 2)[1]) || 80,
                          }
                        : undefined,
                })),
            };

            // Start the server
            runServer(parsedConfig.rootHost, parsedConfig.childHosts);
        })
        .catch(async (err: Error) => {
            // Create the log file
            await fsp.writeFile(
                path.join(process.cwd(), "config.json"),
                `{"version":"${process.env.npm_package_version}","hosts":[{"name":"localhost","root":true}]}`
            );

            // Log the error and exit
            log(`Error reading config file: ${err.message}`, "Error");
            exit(1);
        });
}

void run();
