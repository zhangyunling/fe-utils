'use strict'
const path = require('path')

const testWebpackConfig = {
  mode: 'none',
  entry: {
    'FEUtils': './src/index.js',
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
