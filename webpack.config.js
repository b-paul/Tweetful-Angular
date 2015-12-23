'use strict';

var path = require('path');

var dev = process.env.NODE_ENV !== 'production',
    entry = [path.resolve('app.js')],
    output = 'bundle.js';

dev && entry.push('webpack-dev-server/client?http://localhost:8080');

module.exports = {
  entry: entry,
  output: {
    filename: output
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          cacheDirectory: ''
        } }
    ]
  }
};
