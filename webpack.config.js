const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const dataCopyWebpackPlugin = new CopyWebpackPlugin({
  patterns: [
    { from: path.join(__dirname, 'src', 'assets', 'images'), to: path.join(__dirname, 'dist', 'assets', 'images') },
    { from: path.join(__dirname, 'src', 'assets', 'sounds'), to: path.join(__dirname, 'dist', 'assets', 'sounds') },
  ],
});

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    assetModuleFilename: path.join('[name].[contenthash][ext]'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new MiniCSSExtractPlugin({
      filename: '[name].css',
    }),
    dataCopyWebpackPlugin,
  ],
  devServer: {
    port: 9000,
    watchFiles: path.join(__dirname, 'src'),
  },
};
