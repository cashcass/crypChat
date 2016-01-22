/**
 * Created by Rasi on 11/23/15.
 */
var webpack = require('webpack');
var WebPackServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebPackServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8888, 'localhost')
