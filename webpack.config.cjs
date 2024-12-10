const path = require("path");

//*
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
    resolve: {
        modules: ["node_modules"],
        alias: {
            URLCompressor: path.resolve(__dirname, "lib/url-comp.js"),
        },
    },
};
// */

/*
module.exports = {
    mode: "production",
    entry: "./lib/fallback.js",
    target: "node",
    output: {
        filename: "fallback.js",
        path: path.resolve(__dirname, "resources"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        modules: ["node_modules"],
        alias: {
            URLCompressor: path.resolve(__dirname, "lib/url-comp.js"),
        },
    },
};
// */
