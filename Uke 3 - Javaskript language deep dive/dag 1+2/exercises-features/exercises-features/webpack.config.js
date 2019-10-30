var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: 'inline-sourcemaps',

  entry: {
    '4-exercises': './src/exercises/4-functions.js',
    '5-exercises': './src/exercises/5-objects.js',
    '5-lab-exercises': './src/exercises/5-hangman.js',
    '4-solutions': './src/solutions/4-functions.js',
    '5-solutions': './src/solutions/5-objects.js',
    '5-lab-solutions': './src/solutions/5-hangman.js'
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
