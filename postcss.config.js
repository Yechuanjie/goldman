// module.exports = ({ file, options, env }) => ({
module.exports = ({ file }) => ({
  parser: file.extname === '.sss' ? 'sugarss' : false,
  ident: 'postcss',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['iOS >= 7', 'Android >=4.0']
    },
    cssnano: {
      autoprefixer: false,
      reduceIdents: false
    }
  }
});
