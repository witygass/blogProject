const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  state: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(express.static(__dirname + '/client'));

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('blog app listining at http://%s:%s', host, port);
});