'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const pkg = require('../package.json');

const banner =
    '/*!\n' +
    ' * ' + pkg.name + ' v' + pkg.version + '\n' +
    ' * (c) ' + new Date().getFullYear() + ' QTT \n' +
    ' * Released under the MIT License.\n' +
    ' */';

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.BannerPlugin({banner: banner, raw: true, entryOnly: true})
  ]
});

module.exports = webpackConfig;
