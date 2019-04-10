let express = require('express');
let fs = require('fs');
let Vue = require('vue');
// vue 提供的服务端渲染包
let VueServerRenderer = require('vue-server-renderer');

let app = express();

let vm = new Vue({
  template: '<h1>好的很s</h1>'
})
let template = fs.readFileSync('./index.html', 'utf8');
// 创建渲染函数
let render = VueServerRenderer.createRenderer({
  template
});


app.get('/', (req, res) => {
  render.renderToString(vm, function(err, html) {
    res.send(html)
  })
})

app.listen(3000)