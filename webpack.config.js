"use strict";

const webpack = require("webpack");
const path = require("path");

const phaserModule = path.join(__dirname, "/node_modules/phaser/");
const phaser = path.join(phaserModule, "dist/phaser.js");

module.exports = {
    entry: "./src/main.ts",

    devtool: "inline-source-map",

    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/build/",
        filename: "bundle.js"
    },

    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: "file-loader",
                exclude: "/node_modules/"
            },
            {
                type: "javascript/auto",
                test: /\.json$/,
                use: "file-loader",
                exclude: "/node_modules/"
            },
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: "/node_modules/"
            }
        ]
    },

    devServer: {
        open: true
    },

    plugins: [
        new webpack.DefinePlugin({
            "CANVAS_RENDERER": JSON.stringify(true),
            "WEBGL_RENDERER": JSON.stringify(true)
        })
    ],

    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            phaser: phaser
        }
    }
};