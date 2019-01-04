const path = require('path');
const webpack = require('webpack');

let config = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(process.cwd(), './dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;