'use strict'
const path = require('path');
const pkg = require('../package.json');

const testWebpackConfig = {
  mode: 'none',
  entry: {
    [pkg.name]: './src/index.js',
  },
  output: {
    path: path.join(__dirname, '..', 'test/asserts'),
    filename: '[name].js',
    library: ['[name]'],
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/
    }]
  },
};

module.exports = testWebpackConfig;
