import "dotenv/config";

import { log } from "./utils/logOutput";
import { runServer } from "./server/server";

function run() {
    if (!process.env.PORT) log("PORT must set in .env file", "error");

    runServer(Number(process.env.PORT));
}

void run();
