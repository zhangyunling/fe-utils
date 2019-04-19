const path = require('path')

const nodeExternals = require('webpack-node-externals')

const browser = process.env.TARGET === 'browser'

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'less-loader',
          'css-loader',
        ],
        include: /tinymce/,
      },
      {
        test: /\.(xlsx)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot(\?#iefix)?|ttf|(svg#.+))$/i,
        loader: 'file-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false,
          loaders: {
            js: 'babel-loader',
            sass: 'vue-style-loader!css-loader?importLoaders=1!less-loader?root=../src/client',
          },
        }
      }
    ]
  },
  externals: !browser ? [nodeExternals()]: undefined,
  resolve: {
    alias: {
      '~components': resolve('src/components')
    }
  },
  devtool: '#inline-cheap-module-source-map'
}
