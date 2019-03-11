const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './src/main.jsx'
  ],
  output: {
      path: path.join(__dirname, 'client'),
      filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ]
};
