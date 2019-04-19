'use strict'
const path = require('path')

const webpack = require('webpack')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = require('../config')
const utils = require('./utils')
const baseWebpackConfig = require('./webpack.base.conf')

const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : require('../config/prod.env')

baseWebpackConfig.entry.vendors = ['vue', 'vue-router'];
const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: false,
  output: {
    path: config.doc.assetsRoot,
    filename: utils.assetsPath('js/[name].js'),
    chunkFilename: utils.assetsPath('js/[name].js'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new UglifyJsPlugin({
      parallel: true
    }),
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].css'),
      allChunks: true,
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: { safe: true }
    }),
    new HtmlWebpackPlugin({
      filename: config.doc.index,
      template: 'index.html',
      inject: true,
      chunksSortMode: 'dependency',
      hash: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: utils.assetsPath('js/[name].js'),
    }),
  ]
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
