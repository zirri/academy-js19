var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: 'inline-sourcemaps',

  entry: {
    '1-exercises': './src/exercises/1-basic-syntax.js',
    '2-exercises': './src/exercises/2-types-and-literals.js',
    '3-exercises': './src/exercises/3-truth-and-equality.js',
    '1-solutions': './src/solutions/1-basic-syntax.js',
    '2-solutions': './src/solutions/2-types-and-literals.js',
    '3-solutions': './src/solutions/3-truth-and-equality.js'
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
