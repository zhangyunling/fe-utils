'use strict'
const path = require('path')

const webpack = require('webpack')
const MarkdownItContainer = require('markdown-it-container')

const config = require('../config')
const utils = require('./utils')
const dom = require('./dom')
const vueLoaderConfig = require('./vue-loader.conf')

const vueMarkdown = {
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    MarkdownIt.renderer.rules.fence = dom.wrapCustomClass(MarkdownIt.renderer.rules.fence)
    return source
  },
  use: [
    [MarkdownItContainer, 'demo', {
      validate: params => params.trim().match(/^demo\s*(.*)$/),
      render: function(tokens, idx) {
        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

        if (tokens[idx].nesting === 1) {
          var desc = m && m[1] ? md.render(m && m[1]) : '';

          var content = tokens[idx + 1].content;

          var html = dom.convertHtml(dom.stripTags(content, ['script', 'style']));
          var script = dom.findTag(content, 'script');
          var style = dom.findTag(content, 'style');

          return `
<demo-block>
  <template slot="renderer">${html}</template>
  <template slot="desc">${desc}</template>
  <template slot="source">
          `;
        }
        return '</template></demo-block>\n';
      }
    }]
  ]
}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const isPro = process.env.NODE_ENV === 'production';

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './examples/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: isPro ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@component': resolve('../src/components'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test'), resolve('examples')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true,
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.cssLoaders({
            sourceMap: isPro
              ? config.build.productionSourceMap
              : config.dev.cssSourceMap,
            extract: isPro
          }),
          cssSourceMap: isPro
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,
          cacheBusting: config.dev.cacheBusting,
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('examples'), resolve('test'), resolve('src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: vueMarkdown
      },
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
      /zh-cn/
    ),
  ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
