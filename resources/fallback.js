const queryString = new URLSearchParams(window.location.search);
const host = queryString.get("host");
const path = queryString.get("path");

window.onload = () => {
    document.getElementById("url").innerText =
        `Target Site: http://${host}${path ? "/" + path : ""}`;
};

const eventSource = new EventSource(
    `/api/redirect?host=${host}${path ? "&path=" + path : ""}`
);
eventSource.onmessage = (event) => {
    console.log(`Wow! ${event.data}`);
    if (event.data === "redirect") {
        document.getElementById("redirect").innerText =
            "Site is up! Redirect in 5 seconds...";
        setTimeout(() => {
            window.location.href = `http://${host}${path ? "/" + path : ""}`;
        }, 5000);
    }
};
