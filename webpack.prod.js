//@ts-check
const path = require('path');

// @ts-ignore
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  context: path.join(__dirname,'src'),
  mode:'production',
  entry: {
    'index.min':'./index.ts'
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'copy.min.js',
    // filename: '[name].js',
    library: 'copyit',
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
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|test)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  }
}