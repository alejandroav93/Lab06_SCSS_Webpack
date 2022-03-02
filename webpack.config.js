const path = require("path");
const HtmlWebpackPLugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: ".src/index/indexlink.js",
    output: {
        filename: "index.bundle.js",
        path: path.resolve(__dirname, "bundled")
    },
    plugins:[
        new HtmlWebpackPLugin({
            template: "index.html",
        }),
    ]
}