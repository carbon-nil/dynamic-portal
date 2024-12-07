const ping = require("ping");
const path = require("path");

module.exports = {
    mode: "production",
    entry: "./dist/index.js",
    target: "node",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "public"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {},
};
