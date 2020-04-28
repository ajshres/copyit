//@ts-check

const path = require('path')

module.exports = {
  mode:"development",
  entry: './src/index.ts',
  output: {
    filename: 'copy.js',
    path: path.resolve(__dirname, 'dist'),
    library: "copyit"
  },
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
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  }
}