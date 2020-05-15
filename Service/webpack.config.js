const path = require('path');
const src_dir = path.join(__dirname + '/client');
const dist_dir = path.join(__dirname + '/public');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: `${src_dir}/index.jsx`,
  output: {
    path: dist_dir,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/ ,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ //<--key to reduce React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
}