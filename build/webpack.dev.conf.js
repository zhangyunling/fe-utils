'use strict'
const fs = require('fs');
const os = require('os');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    path: path.join(__dirname, '../dist'),
  },
  devServer: {
    contentBase: [
      path.join(__dirname, '../test/'), 
      path.join(__dirname, '../')
    ],
    clientLogLevel: 'warning',
    historyApiFallback: true,
    inline: true,
    hot: true,
    compress: true,
    host: '0.0.0.0',
    port: 8088,
    open: false,
    overlay: { 
      warnings: false, 
      errors: true 
    },
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': "development"
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
});

module.exports = devWebpackConfig;
