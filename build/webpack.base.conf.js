/** 
 * @desc webpack基础配置，公用配置；
 */
'use strict'
const path = require('path');
const pkg = require('../package.json');
let fileName = pkg.fileName;

// 实时编译，几个自动化的小工具；
require('../scripts/create.js');

const baseWebpackConfig = {
  entry: {
    [fileName]: './src/index.ts'
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name].js',
    library: [`${pkg.libName}`],
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.[jt]s$/,
        loader: "eslint-loader",
        include: [path.join(__dirname, '../src')],
        enforce: "pre",
        options: {
          emitError: true
        }
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        include: [path.join(__dirname, '../src')]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = baseWebpackConfig;
