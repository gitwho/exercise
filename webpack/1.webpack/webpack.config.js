// 默认名字 webpack.config.js：  npx webpack
//  打包指定配置文件:  npx webpack --config webpack.config1.js

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development', //设置开发模式
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash:8].js' // 
  }, // 出口   路径必须是绝对路径
  devServer: { //配置webpack-dev-server 默认在内存中打包 
    port: 3000,
    progress: true,
    contentBase: 'dist',
    // compress: true,  //压缩createGzip
  },
  // loader的作用： 可以转化代码，将其它格式转化为js
  module: { //对模块进行配置
    rules: [ // 匹配的规则
      // loader 默认 从右向左写
      // loader 特点 简单 一个loader处理一件事 css-loader 
      // style-loader 插入到html中
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: { // 使用babel-loader 进行传递参数
            "presets": ["@babel/preset-env"],
            "plugins": [
              ["@babel/plugin-proposal-decorators", {
                "legacy": true
              }],
              ["@babel/plugin-proposal-class-properties", {
                "loose": true
              }],
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html', //会被放到打包的文件夹下
      minify: {
        removeAttributeQuotes: true, // 移除属性的引号
        collapseWhitespace: true // 去空格
      }
    })
  ]
}