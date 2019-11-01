var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: 'inline-sourcemaps',

  entry: {
    '6-exercises': './src/exercises/6-arrays.js',
    '7-exercises': './src/exercises/7-this.js',
    '6-solutions': './src/solutions/6-arrays.js',
    '7-solutions': './src/solutions/7-this.js'
  },

  output: {
    path: path.join(__dirname, '/public/'),
    publicPath: '/',
    filename: '[name].js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  }
};
