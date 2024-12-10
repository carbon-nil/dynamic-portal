const URLCompressor = require("./url-comp.js");

const queryString = new URLSearchParams(window.location.search);
const host = queryString.get("h") || "";
const path = queryString.get("p") || "";
const parsedHost = URLCompressor.expand(host);
const parsedPath = URLCompressor.expand(path);

window.onload = () => {
    document.getElementById("url").innerText =
        `Target Site: http://${parsedHost}${parsedPath ? "/" + parsedPath : ""}`;
};

const eventSource = new EventSource(
    `/api/redirect?h=${host}${path.length ? "&p=" + path : ""}`
);
eventSource.onmessage = (event) => {
    console.log(`Wow! ${event.data}`);
    if (event.data === "redirect") {
        document.getElementById("redirect").innerText =
            "Site is up! Redirect in 5 seconds...";
        setTimeout(() => {
            window.location.href = `http://${parsedHost}${parsedPath ? "/" + parsedPath : ""}`;
        }, 5000);
    }
};
