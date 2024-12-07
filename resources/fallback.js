const queryString = new URLSearchParams(window.location.search);

window.onload = () => {
    const host = queryString.get("host");
    const path = queryString.get("path");

    const output = document.getElementById("url");
    output.innerHTML = `&#x1F534; ${host}${path ? "/" + path : ""}`;
};
