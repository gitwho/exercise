let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin('./dist'), // 清空dist文件夹，上线打包用
    
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),

    new webpack.DefinePlugin({ // 定义环境变量
      PRODUCTION: JSON.stringify('dev'),
      FLAG: 'true',
      EXPRESSION: JSON.stringify('1+1') // 表达式
    }),
    new webpack.BannerPlugin('make by YB') // 打包的代码前 加注释
  ],
  
  // mode: 'development'
}


