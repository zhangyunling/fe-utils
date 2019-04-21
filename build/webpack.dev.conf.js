'use strict'
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('../package.json');

const devWebpackConfig = {
  mode: 'development',
  entry: {
    [pkg.name]: './src/index.js',
  },
  output: {
    path: path.join(__dirname, '..', 'test'),
    filename: '[name].js',
    library: ['[name]'],
  },
  devServer: {
    contentBase: path.join(__dirname, '..'),
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: 'localhost',
    port: 8080,
    open: false,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    proxy: {},
    quiet: true,
    index: 'test/asserts/index.html',
    watchOptions: {
      poll: false,
    },
    staticOptions: {
      redirect: true
    }
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': "development"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'test/asserts/index.html',
      template: 'test/asserts/index.html',
    }),
  ]
};

module.exports = devWebpackConfig;
