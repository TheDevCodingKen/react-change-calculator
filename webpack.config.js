const path = require("path");
const webpack = require("webpack"); // eslint-disable-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require("html-webpack-plugin"); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  context: path.join(__dirname, "/src"),

  entry: {
    javascript: "./index",
  },

  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/dist"),
  },

  resolve: {
    alias: {
      react: path.join(__dirname, "node_modules", "react"),
    },
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },
};
