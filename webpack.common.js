const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/app.js",
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/template.html",
            filename: "index.html"
        })
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }, {
            test: /\.html$/,
            use: ["html-loader"]
        }, {
            test: /\.(jpeg|jpg|png)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "[name].[hash].[ext]",
                    outputPath: "imgs"
                }
            }
        }]
    }
}