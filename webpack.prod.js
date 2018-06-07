//@ts-check
const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  context: path.join(__dirname,'src'),
  mode:'production',
  entry: {
    'index.min':'./src/index.js'
  },
  devtool: "source-map",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'bundle')
  },
  plugins: [
    new UglifyJsPlugin({
        test: /\.min\.js$/,
        sourceMap: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}