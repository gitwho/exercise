// commonjs 规范
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCss = require('optimize-css-assets-webpack-plugin');
let UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  optimization: { //这里可以放一些优化的配置, 只有生产模式才生效
    minimizer: [ // 压缩配置
      new UglifyJSPlugin({   // 压缩js
        cache: true,  // 缓存打包，可以拿到以前的缓存
        parallel: true,  // 多个js并行打包
        sourceMap: true  // 某一部分，可以查源码
      }),
      new OptimizeCss()  // 压缩css
    ]

  },
  entry: {  
    main: './src/index.js',
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
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  module: {
    rules: [
      // loader 简单 单一 style-loader css-loader 
      // loader 写法 [] '' {}  从右向左写 从下到上
      // loader的分类 preloader + normalLoader + postLoader
      // less less-loader / node-sass sass-loader / stylus stylus-loader
      // 抽离css样式 变成 link href 的形式
      //  mini-css-extract-plugin -->替换 style-loader 功能
      {
        test: /\.css$/,
        use: ['css-loader','postcss-loader']
      },
      {
        test: /\.css$/,
        use: MiniCssExtractPlugin.loader,
        enforce: 'post' // 后置，后执行
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      }
      // {
      //   test: /\.css$/,
      //   use: 'style-loader',
      //   enforce: 'post'
      // },
      // {
      //   test: /\.less$/,
      //   use: ['style-loader','css-loader','less-loader']
      // }
    ]
  },
  // mode: 'development'
  mode: 'production'
}