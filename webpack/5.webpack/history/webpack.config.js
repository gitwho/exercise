let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let Happypack = require('happypack');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve('src'),
        use: 'happypack/loader?id=js' // 调用 Happypack id=js 的插件
        
      },
      {
        test: /\.css$/,
        use:  'happypack/loader?id=css',
      },
    ]
  },
  plugins: [
    // 多线程打包 happypack,(项目很复杂时使用)
    new Happypack({
      id: 'css',
      use: ['style-loader', 'css-loader']
    }),
    new Happypack({
      id: 'js',
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-env"
          ]
        }
      }]
    }),
    // 可约定哪个包 包要引入了，可以自己采取引用哪个包
    new webpack.IgnorePlugin(/\.\/local/, /moment/), // 引入 /moment时，屏蔽 含有local路径的
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}



// 1. dllPlugin 动态链接库
// 2. exclude include
// 3. IgnorePlugin
// 4. happypack 默认开启4个线程 ，多线程打包 进程里包括了一条主线程 node中可开子线程
// 
