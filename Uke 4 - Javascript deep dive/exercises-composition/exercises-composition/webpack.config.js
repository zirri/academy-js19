var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: 'inline-source-map',

  entry: {
    '8-exercises': './src/exercises/8-composition.js',
    '8-solutions': './src/solutions/8-composition.js'
  },

  output: {
    path: path.join(__dirname, '/public/'),
    publicPath: '/',
    filename: '[name].js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  }
};
