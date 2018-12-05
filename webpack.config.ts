import * as path from 'path'
import * as webpack from 'webpack'
const VueLoaderPlugin = require('vue-loader/lib/plugin')

export default {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    reactjs: path.join(__dirname, 'packages/reactjs/src/app/index.tsx'),
    vuejs: path.join(__dirname, 'packages/vuejs/src/app/index.ts')
  },
  output: {
    filename: '[name]/index.bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          {
            use: [
              'raw-loader',
              'pug-plain-loader'
            ]
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.vue', '.js'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
