const { merge } = require('webpack-merge');
const path = require('path');
const commonconfig = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonconfig, {
    mode: 'production',
    output: {
        filename: 'main.[hash].bundle.js',
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin(),
            new OptimizeCssAssetsPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'index.html'),
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                }
            })
        ]
    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].[hash].css' }),
        new CleanWebpackPlugin(),
    ]
});