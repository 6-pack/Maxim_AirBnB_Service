const path = require('path');
const src_dir = path.join(__dirname + '/client/');
const dis_dir = path.join(__dirname + '/public');

module.export = {
  entry: `${src_dir}/index.js`,
  output: {
    path: dis_dir,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: src_dir,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
      }
    ]
  }
}