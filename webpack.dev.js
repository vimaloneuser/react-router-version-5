const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: './',
    compress: true,
    port: JSON.stringify(process.env.REACT_APP_PORT || 4001)
  }
});