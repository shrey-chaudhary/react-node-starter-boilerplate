const { merge } = require('webpack-merge');
const commonconfig = require('./webpack.common');
module.exports = merge(commonconfig, {
    mode: 'development',
    output: {
        filename: 'main.bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
    }
});