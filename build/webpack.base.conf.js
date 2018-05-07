const fs = require('fs');
const path = require('path');
const utils = require('./utils');
const config = require('../config');
const webpack = require('webpack');
const eslintFriendly = require('eslint-friendly-formatter');

const MODULE_DIR = /(.*([\/\\]node_modules|\.\.)[\/\\](@[^\/\\]+[\/\\])?[^\/\\]+)([\/\\].*)?$/g;

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    index: './src/js/index',
    about: './src/js/about.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': resolve('src')
    },
    mainFields: ['jsnext:main', 'module', 'main'],
    modules: [path.resolve('node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: resolve('src'),
        options: {
          formatter: eslintFriendly
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // include: resolve('src')
        include(filepath) {
          //TODO:webpack3对treeshaking的支持不好，但是webpack4不够成熟，暂且这么处理的treeshaking效果最好
          if (filepath.split(/[/\\]/).indexOf('node_modules') === -1 || filepath.split(/[/\\]/).indexOf('@wnl') > -1) {
            return true;
          }
          return false;
        },
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          ignoreCustomFragments: [/\{\{.*?}}/],
          attrs: ['img:src', 'link:href']
        }
      }
    ],
    noParse: /node_modules\/(jquey|moment|chart\.js)/
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
