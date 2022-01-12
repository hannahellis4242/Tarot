const path = require("path");
module.exports = {
  target: "node",
  mode: "development",
  entry: {
    index: "./src/index.ts",
    check: "./src/check.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../main/public/scripts"),
  },
  //optimization: { runtimeChunk: "single" },
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
