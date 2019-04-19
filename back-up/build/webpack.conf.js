const webpack = require('webpack')
const path = require('path')

const pkg = require('../package.json')

const rootPath = path.resolve(__dirname, '../')

const config = {
    mode: 'production',
    entry: path.resolve(rootPath, 'src', 'index.js'),
    output: {
        filename: `${pkg.name}.min.js`,
        path: path.resolve(rootPath, 'dist'),
        library: `${pkg.name}`,
        libraryTarget: "umd"
    },
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }]
    }
}

module.exports = config