const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const dllManifest = require('../dll/vendors_manifest.json');

const publicPath = 'https://mobilecdn.51wnl.com/' + config.build.ftpDirectory + '/';
let deployArgs = process.argv.slice(2);
let isDeploy = deployArgs.length > 0 && deployArgs[0].indexOf('deploy') > -1;

var proWebpackConfig = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ],
          // publicPath: '../../'
          publicPath: isDeploy ? publicPath : '../../'
        })
      }
    ]
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // make sure script tags are async to avoid blocking html render
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
      // sync: /vendors*.dll.*$/,
      sync: [dllManifest.name + '.dll', 'manifest'],
      preload: {
        test: /^0|^main|^style-.*$/,
        chunks: 'all'
      }
    }),
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': config.build.env
    }),
    // minify remove some of the dead code
    new UglifyJSPlugin({
      uglifyOptions: {
        warnings: true
      }
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0 &&
          count >= 2
        );
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'],
      minChunks: Infinity
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(__dirname, '../dll/vendors_manifest.json'))
    }),
    // make DLL assets available for the app to download
    new AddAssetHtmlPlugin({
      filepath: require.resolve('../dll/' + dllManifest.name + '.dll.js'),
      // publicPath: './static/dll',
      publicPath: isDeploy ? publicPath + 'static/dll' : './static/dll',
      outputPath: config.build.assetsSubDirectory + '/dll',
      includeSourcemap: false,
      hash: false
    })
  ]
};
if (isDeploy) {
  proWebpackConfig.output.publicPath = publicPath;
}
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
  // 每个页面生成一个html
  var plugin = new HtmlWebpackPlugin({
    // 生成出来的html文件名
    filename: path.resolve(__dirname, '../dist/' + name + '.html'),
    // 每个html的模版，这里多个页面使用同一个模版
    template: 'src/' + name + '.html',
    // 自动将引用插入html
    inject: true,
    // 每个html引用的js模块，也可以在这里加上vendor等公用模块
    chunks: ['manifest', 'vendor', name],
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: false
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    },
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
  });
  proWebpackConfig.plugins.push(plugin);
});

var webpackConfig = merge(baseWebpackConfig, proWebpackConfig);

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin');
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' + config.build.productionGzipExtensions.join('|') + ')$'),
      threshold: 10240,
      minRatio: 0.8
    })
  );
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerPort: 9988
    })
  );
}

module.exports = webpackConfig;
