const path = require('path');
const src_dir = path.join(__dirname + '/client/src');
const dist_dir = path.join(__dirname + '/public');

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
  }
}