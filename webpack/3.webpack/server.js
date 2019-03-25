let express = require('express');
let middle = require('webpack-dev-middleware');

let app = express(); 

let webpack = require('webpack');
let config = require('./webpack.config.js');
let compiler = webpack(config);

app.use(middle(compiler));

//方法三： 在服务端启动webpack 3000 （插件：webpack-dev-middleware, 服务端webpack开发中间件）
// 各个方法接口路径会有差别
app.get('/user', function(resq, res) {
    res.json({name: 'ywwb'})
});

app.listen(3000);