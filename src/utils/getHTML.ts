import { promises as fsp } from "fs";

export async function getHTML(url: string): Promise<string> {
    return await fsp.readFile(url, "utf-8").then((data) => data);
}
