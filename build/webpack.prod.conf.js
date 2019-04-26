'use strict';
const path = require('path');
const webpack = require('webpack');
const packageConfig = require('../package.json');
const pkg = require('../package.json');

const banner =
    '/*!\n' +
    ' * FE Utils v' + packageConfig.version + ' (https://github.com/zhangyunling/FEUtils)\n' +
    ' * (c) ' + new Date().getFullYear() + ' zhangyunling \n' +
    ' * Released under the MIT License.\n' +
    ' */';

const webpackConfig = {
  mode: 'production',
  entry: {
    [pkg.name]: './src/index.js',
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: `${[pkg.name]}.min.js`,
    library: `${[pkg.name]}`,
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        include: [path.join(__dirname, '..', 'src')],
        enforce: "pre",
        options: {
          emitError: true
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({banner: banner, raw: true, entryOnly: true})
  ]
};

module.exports = webpackConfig;
