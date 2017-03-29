const path = require('path');
const webpack = require('webpack-stream').webpack;

module.exports = {
  entry: './js/index.jsx',
  devtool: 'cheap-module-inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/js'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot-loader', 'babel-loader'],
      include: path.join(__dirname, './js'),
      exclude: /node_modules/,
    }],
  },
};
