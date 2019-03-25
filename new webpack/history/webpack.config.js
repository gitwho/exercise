// commonjs 规范
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {  // 多入口，多页项目
    main: './src/index.js',
    login: './src/login.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist')  // 以当前路径解析一个绝对路径
  },
  devServer: {
    contentBase: './dist',  // 默认是当前项目的根目录
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 模板位置
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './src/login.html', // 模板位置
      filename: 'login.html',
      chunks: ['login']
    })
  ],
  mode: 'development'
}