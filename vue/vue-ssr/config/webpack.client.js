let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let merge = require('webpack-merge');
let base = require('./webpack.base')

let VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(base, {
  entry: {
    client: path.resolve(__dirname, '../src/client-entry.js')
  },
  plugins: [
    new VueSSRClientPlugin(), // 打包产生json
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
})

