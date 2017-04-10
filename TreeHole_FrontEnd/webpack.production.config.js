var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: {
    app: path.resolve(__dirname, 'app/main.js'),
    vendors: ['react','react-dom','react-router']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[chunkhash:16].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [node_modules_dir],
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
      }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[chunkhash:16].js')
  ]
};

module.exports = config;
