import * as webpack from 'webpack'
import * as path from 'path'

export default {
  mode: 'development',
  entry: {
    reactjs: path.join(__dirname, 'src/app/index.tsx')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist')
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
