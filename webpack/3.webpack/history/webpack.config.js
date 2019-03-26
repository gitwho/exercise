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

  resolve: { // commonjs 查找路径 require
    modules: [path.resolve('node_modules'), path.resolve('vendor')], //查找当前路径的xx文件, 依次向后找
    extensions: ['.js', '.json', '.css'], // 扩展名省略
    mainFields: ['main', 'browser'], // 主文件
    mainFiles: ['index.js'], // 入口文件
    alias: { // 别名
      bootstrap: 'bootstrap/dist/css/bootstrap.css',

    }
  },

  // source-map 源码映射 把当前源代码与打包后的代码 做一个映射关系 
  // 在生产环境中， 进行调试  前端监控
  // devtool: 'source-map', // 他会单独创建一个源码映射文件，指定到当前行和列
  // cheap 不会定位到列数
  //devtool: 'eval-source-map', // 不分离
  // devtool: 'cheap-module-source-map', // babel编译后的内容
  // devtool: 'cheap-module-eval-source-map', // 生产环境不需要 source-map

  // 边更改, 边重新打包
  // watch: true,  //实时监控
  // watchOptions: {
  //     poll: 1000,
  //     aggregateTimeout: 2000, // 防抖
  //     ignored: /node_modules/,  // 忽略掉的文件夹
  // },
  module: {
    // 优化那些不进行模块的解析
    noParse: /jquery|xx/, // 自己写的非第三方js 不需要require的

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
    // new CopyWebpackPlugin([{  // 将不需要解析的文件word/ppt，直接放到打包后的目标文件夹
    //   from: './src/static',
    //   to: path.resolve(__dirname, 'dist')
    // }]),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.BannerPlugin('make by YB') // 打包的代码前 加注释
  ],
  devServer: { // 在webpack这一层解决跨域
    // 方法一
    // before(app) {  //dev-server开启之前, app 指 let app = express() 的app
    //     app.get('/api/user', function(req,res){
    //         // 可以自己写返回的数据
    //         res.send({age: 19});
    //     })
    // },

    // //方法二： webpack本地代理
    // proxy: {
    //     '/api': {
    //         target: 'http://localhost:3000',
    //         pathRewrite: {
    //             '/api': ''
    //         }
    //     },
    // }
  },
  mode: 'development'
}


// 实现跨越的三种方法
// 代理webpack 实现代理
// 我 -> 我的node -> 别人服务器
// 我 -> 服务器 配置允许跨域


// http-proxy
// 前端 8080，访问--> 后端 3000 ： 跨域
// webpack-dev-server 内置了 express http-proxy-middleware 实现代理