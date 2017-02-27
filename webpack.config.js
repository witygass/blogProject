const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './main.jsx',
  ],
  output: {
    path: path.join(__dirname, 'client'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader', 'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules')
    ],
  },
};
