'use strict';
const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const packageConfig = require('../package.json');
const config = require('../config');
const env = require('../config/prod.env');
const utils = require('./utils');
const baseWebpackConfig = require('./webpack.base.conf');

delete baseWebpackConfig.entry;

// 单组件生成
const readDir = require('fs').readdirSync;
const files = readDir('./src/components');
if( /\.DS_Store/.test(files[0]) ) {
  files.shift();
}
const entry = {};
files.forEach(file => {
  if(!/theme/.test(file)) {
    entry[file] = `./src/components/${file}/index.js`;
  }
});

const localeFiles = readDir('./src/locale');
if( /\.DS_Store/.test(localeFiles[0]) ) {
  localeFiles.shift();
}

localeFiles.forEach(file => {
  if( /^lang$/.test(file)){
    let langFiles = readDir('./src/locale/lang');
    if( /\.DS_Store/.test(langFiles[0]) ) {
      langFiles.shift();
    }
    langFiles.forEach(langFile => {
      if(langFile && langFile.split('.')[0]) {
        langFile = langFile.split('.')[0]
        entry[`locale/lang/${langFile}`] = `./src/locale/lang/${langFile}`;
      }
    })
    return
  }
  
  if(file && file.split('.')[0]) {
    file = file.split('.')[0]
    
    entry[`locale/${file}`] = `./src/locale/${file}`;
  }
});



entry['lib'] = './src/index.js';

const banner =
    '/*!\n' +
    ' * Let UI v' + packageConfig.version + ' (https://github.com/yued-fe/let-ui)\n' +
    ' * (c) ' + new Date().getFullYear() + ' yued fe team \n' +
    ' * Released under the MIT License.\n' +
    ' */';

const webpackConfig = merge(baseWebpackConfig, {
    entry,
    module: {
      rules: utils.styleLoaders({
        sourceMap: false,
        extract: true
      })
    },
    devtool: false,
    output: {
        path: path.join(__dirname, '..', 'lib'),
        filename: '[name].min.js',
        library: ['let-ui', '[name]'],
        libraryTarget: 'umd',

    },
    externals: {
      vue: {
        root: 'Vue',
        commonjs2: 'vue',
        amd: 'vue',
        commonjs: 'vue'
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': env
      }),
      new webpack.LoaderOptionsPlugin({
          minimize: true
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        sourceMap: false
      }),
      // extract css into its own file
      new ExtractTextPlugin({
        filename: '[name].min.css'
      }),
      new OptimizeCSSPlugin(),
      new webpack.BannerPlugin({banner: banner, raw: true, entryOnly: true})
    ]
});

module.exports = webpackConfig;
