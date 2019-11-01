var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: 'inline-source-map',

  entry: {
    '10-lab-exercises': './src/exercises/10-abstraction.js',
    '10-lab-solutions': './src/solutions/10-abstraction.js'
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
