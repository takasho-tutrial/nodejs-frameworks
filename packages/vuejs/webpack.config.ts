import * as webpack from 'webpack'
import * as path from 'path'

export default {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    reactjs: path.join(__dirname, 'src/app/index.ts')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          scss: 'vue-style-loader!css-loader!sass-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.vue', '.js'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  target: 'node'
}
