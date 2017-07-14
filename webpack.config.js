// webpack.config.js
var path = require('path');
var webpack = require("webpack");

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development


var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  ];

  plugins = plugins.concat(
    process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
  );

module.exports = {
  entry: './frontend/infipx.jsx',
  output: {
    filename: './app/assets/javascripts/bundle.js',
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
