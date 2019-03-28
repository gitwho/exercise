let {resolve} = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  optimization: {
    splitChunks: { // 分离代码块
      cacheGroups: { // 缓存组
        common: { // 无name属性，默认打包后文件名：common~"引入东西的文件"（eg： common~index~login）
          // name: 'xxx',
          chunks: 'initial', // 从 入口 文件就开始抽离
          minSize: 0, // 公用部分超过 0 字节，就抽离
          minChunks: 2, // 至少 2 次，就抽离
        },
        vendor: {
          pritority: 1, // 权重，优先执行当前
          test: /node_modules/,
          chunks: 'initial',
          minSize: 0,
          minChunks: 2,
        }
      }
    }
  },
  mode: 'production',
  entry: {
    login: './src/login.js',
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: resolve('./dist')
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', 
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}

// noParse 
// ignorePlugin
// exclude include
// happypack

// webpack 内置处理机制 tree-shaking(默认支持es6语法 require不会分析依赖，未用到的方法等，还是会打包到dist文件夹) 
// scope hosting (导入要使用import语法)
// dllPlugin 抽取公共模块 （只在多页面中使用）
// 抽取公共模块