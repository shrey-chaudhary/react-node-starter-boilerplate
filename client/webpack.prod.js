const { merge } = require('webpack-merge');
const commonconfig = require('./webpack.common');
module.exports = merge(commonconfig, {
    mode: 'production',
    output: {
        filename: 'main.[hash].bundle.js',
    }
});