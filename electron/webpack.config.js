const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = [
  {
    mode: "development",
    entry: "./src/electron.ts",
    target: "electron-main",
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: "ts-loader" }],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "electron.js",
    },
  },
  /*{
    mode: "development",
    entry: path.resolve(__dirname, "src", "react.tsx"),
    target: "electron-renderer",
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.ts(x?)|module.css$/,
          include: /src/,
          use: [{ loader: "ts-loader" }],
        },
      ],
    },
    output: { path: path.resolve(__dirname, "dist"), filename: "react.js" },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
      }),
    ],
  },*/
];
