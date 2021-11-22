const path = require("path");
module.exports = {
  target: "node",
  entry: "./src/display.ts",
  output: {
    filename: "display.js",
    path: path.resolve(__dirname, "../main/public/scripts"),
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};