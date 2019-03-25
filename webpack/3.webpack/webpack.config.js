let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist')
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


// http-proxy
// 前端 8080，访问--> 后端 3000 ： 跨域
// webpack-dev-server 内置了 express http-proxy-middleware 实现代理


