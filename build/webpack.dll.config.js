const webpack = require('webpack');
const path = require('path');
const rm = require('rimraf');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

rm(path.resolve(__dirname, '../dll'), err => {
  if (err) throw err;
});

const vendors = ['jquery'];

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dll'),
    filename: '[name]_[hash].dll.js',
    library: '[name]_[hash]'
  },
  entry: {
    vendors
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        warnings: true
      }
    }),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../dll/[name]_manifest.json'),
      name: '[name]_[hash]'
    })
  ]
};
