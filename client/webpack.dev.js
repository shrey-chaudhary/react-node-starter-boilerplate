const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const commonconfig = require('./webpack.common');
module.exports = merge(commonconfig, {
    mode: 'development',
    output: {
        filename: 'main.bundle.js',
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        }, {
            test: /\.(svg|jpe?g|gif|png)$/,
            use: 'file-loader',
        }]
    },
    devServer: {
        hot: true,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        })
    ]
});