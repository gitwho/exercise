// commonjs 规范
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCss = require('optimize-css-assets-webpack-plugin');
let UglifyJSPlugin = require('uglifyjs-webpack-plugin');
let webpack = require('webpack')

module.exports = {
  optimization: { 
    minimizer: [ 
      new UglifyJSPlugin({  
        cache: true, 
        parallel: true,  
        sourceMap: true  
      }),
      new OptimizeCss()
    ]

  },
  entry: {  
    main: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist')  
  },
  devServer: {
    contentBase: './dist',  
  },
  externals: { // 打包排除掉jquery
    'jquery': '$'
  }, 
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery'  //这个$ 不是全局的
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html', 
      filename: 'index.html',
      chunks: ['main'],
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  module: {
    rules: [
      {  
        test: require.resolve('jquery'),
        use: 'expose-loader?$'
      },

      // eslint 校验
      // {
      //   test: /\.js$/,
      //   enforce: 'pre',
      //   use: 'eslint-loader'
      // },

      // es6 更高级的语法 转 es5 
      // babel 需要哪几个包 babel-loader @babel/core @babel/preset-env
      {
        test: /\.js$/,
        exclude: /node_modules/,  // 排除查找
        include: path.resolve('src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            // 转化 JS 运行时的api方法， 并且可以优化js 抽离公共部分
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },

      {
        test: /\.css$/,
        use: ['css-loader','postcss-loader']
      },
      {
        test: /\.css$/,
        use: MiniCssExtractPlugin.loader,
        enforce: 'post'
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  },
  mode: 'development'
  // mode: 'production'
}