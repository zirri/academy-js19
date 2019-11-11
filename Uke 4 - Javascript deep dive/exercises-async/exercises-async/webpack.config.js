var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: 'inline-source-map',

  entry: {
    '11-exercises': './src/exercises/11.js',
    '11-solutions': './src/solutions/11.js'
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
