let express = require('express');
let fs = require('fs');
let Vue = require('vue');
let path = require('path');
let VueServerRenderer = require('vue-server-renderer');
let app = express();

let serverBundle = fs.readFileSync('./dist/server.bundle.js', 'utf8');
let template = fs.readFileSync('./dist/index.ssr.html', 'utf8');
// 创建渲染函数
let render = VueServerRenderer.createBundleRenderer(serverBundle, {
  template
})

app.get('/', (req, res) => {
  // 渲染成功的字符串给客户端, 只返回一个字符串 并没有Vue实际功能
  let context = {url: req.url}
  render.renderToString(context, (err, html) => {
    res.send(html)
  })
})


// 顺序 要保证
app.use(express.static(path.resolve(__dirname, 'dist')))


// 如果访问的路径不存在 默认渲染index.ssr.html 并且把路由定向到当前请求的路径
app.get('*', (req, res) => {
  // 渲染成功的字符串给客户端, 只返回一个字符串 并没有Vue实际功能
  let context = {url: req.url}
  render.renderToString(context, (err, html) => {
    res.send(html)
  })
})



app.listen(4000)