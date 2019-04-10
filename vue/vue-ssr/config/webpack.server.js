let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let merge = require('webpack-merge');
let base = require('./webpack.base')

module.exports = merge(base, {
  target: 'node', // 打包的结果给node用
  entry: {
    server: path.resolve(__dirname, '../src/server-entry.js')
  },
  output: {
    libraryTarget: 'commonjs2' // module.exports = server.entry.js
  },
  plugins: [
    // 把 public 目录下 index.ssr 的内容拷贝到 dist 目录
    new HtmlWebpackPlugin({
      filename: 'index.ssr.html',
      template: path.resolve(__dirname, '../public/index.ssr.html'),
      excludeChunks: ['server']
    })
  ]
})

