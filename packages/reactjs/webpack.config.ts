import * as webpack from 'webpack'
import * as path from 'path'

export default {
  mode: 'production',
  entry: {
    reactjs: path.join(__dirname, '/index.tsx')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '/dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  target: 'node'
}
