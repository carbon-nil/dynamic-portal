import { IncomingMessage } from "http";

export function log(message: string, attribute: string = "Info"): void {
    const date = new Date();
    const hh = ("00" + date.getHours()).slice(-2);
    const mm = ("00" + date.getMinutes()).slice(-2);
    const ss = ("00" + date.getSeconds()).slice(-2);

    const messages = message.split("\n");
    for (const row of messages)
        console.log(`[${hh}:${mm}:${ss}] [${attribute}] ${row}`);
}

export function logHTML(message: IncomingMessage): void {
    let text = `${message.method} ${message.url} HTTP/${message.httpVersion}\n`;

    // serialize headers
    let nextKey = undefined as string | undefined;
    for (const keyOrValue of message.rawHeaders) {
        if (nextKey === undefined) {
            nextKey = keyOrValue;
        } else {
            text += `${nextKey}: ${keyOrValue}\n`;
            nextKey = undefined;
        }
    }
    text += "\n";

    // serialize body
    let body = "";
    message.on("data", (chunk) => (body += chunk));
    message.on("end", () => {
        text += body;
    });

    log(text);
}
