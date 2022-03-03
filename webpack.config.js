const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
    index1: "./src/index/indexlink.js",
    rival: "./src/rival/rivallink.js",
    encounter: "./src/encounter/encounterlink",
    catch: "./src/catch/catchlink",
    tailwhip1: "./src/tailwhip1/tailwhiplink.js",
    tailwhip2: "./src/tailwhip2/tailwhiplink2.js",
    tailwhip3: "./src/tailwhip3/tailwhiplink3.js",
    tailwhip4: "./src/tailwhip4/tailwhiplink4.js",
    growl1: "./src/growl1/growllink.js",
    growl2: "./src/growl2/growllink2.js",
    growl3: "./src/growl3/growllink3.js",
    growl4: "./src/growl4/growllink4.js",
    thundershock1: "./src/thundershock1/thundershocklink.js",
    thundershock2: "./src/thundershock2/thundershocklink2.js",
    thundershock3: "./src/thundershock3/thundershocklink3.js",
    thundershock4: "./src/thundershock4/thundershocklink4.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "bundled")
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index/index.html",
            filename: "index.html",
            chunks: ["index1"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/growl3/growl3.html",
            filename: "growl3.html",
            chunks: ["growl3"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/catch/catch.html",
            filename: "catch.html",
            chunks: ["catch"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/encounter/encounter.html",
            filename: "encounter.html",
            chunks: ["encounter"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/growl1/growl.html",
            filename: "growl.html",
            chunks: ["growl1"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/growl2/growl2.html",
            filename: "growl2.html",
            chunks: ["growl2"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/growl4/growl4.html",
            filename: "growl4.html",
            chunks: ["growl4"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/thundershock1/thundershock1.html",
            filename: "thundershock1.html",
            chunks: ["thundershock1"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/thundershock2/thundershock2.html",
            filename: "thundershock2.html",
            chunks: ["thundershock2"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/thundershock3/thundershock3.html",
            filename: "thundershock3.html",
            chunks: ["thundershock3"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/thundershock4/thundershock4.html",
            filename: "thundershock4.html",
            chunks: ["thundershock4"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/tailwhip1/tailwhip.html",
            filename: "tailwhip.html",
            chunks: ["tailwhip"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/tailwhip2/tailwhip2.html",
            filename: "tailwhip2.html",
            chunks: ["tailwhip2"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/tailwhip3/tailwhip3.html",
            filename: "tailwhip3.html",
            chunks: ["tailwhip3"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/tailwhip4/tailwhip4.html",
            filename: "tailwhip4.html",
            chunks: ["tailwhip4"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/end/end.html",
            filename: "end.html",
            chunks: ["end"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/rival/rival.html",
            filename: "rival.html",
            chunks: ["rival"]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};