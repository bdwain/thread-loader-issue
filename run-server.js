const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

let config = require('./webpack.config.js');

const compiler = webpack(config);

const server = new webpackDevServer(compiler);

server.listen(1234, '0.0.0.0', () => {
  console.log('started server on port ', 1234);
});