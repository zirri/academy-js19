var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: 'inline-source-map',

  entry: {
    '9-lab-exercises': './src/exercises/9-lab.js',
    '10-lab-exercises': './src/exercises/10-lab.js',
    '9-lab-solutions': './src/solutions/9-lab.js',
    '10-lab-solutions': './src/solutions/10-lab.js'
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
