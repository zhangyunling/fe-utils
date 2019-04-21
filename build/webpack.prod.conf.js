'use strict';
const path = require('path');
const webpack = require('webpack');
const packageConfig = require('../package.json');

const banner =
    '/*!\n' +
    ' * FE Utils v' + packageConfig.version + ' (https://github.com/zhangyunling/FE-Utils.git)\n' +
    ' * (c) ' + new Date().getFullYear() + ' zhangyunling \n' +
    ' * Released under the MIT License.\n' +
    ' */';

const webpackConfig = {
  mode: 'production',
  entry: {
    'FEUtils': './src/index.js',
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'FEUtils.min.js',
    library: 'FEUtils',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.BannerPlugin({banner: banner, raw: true, entryOnly: true})
  ]
};

module.exports = webpackConfig;
