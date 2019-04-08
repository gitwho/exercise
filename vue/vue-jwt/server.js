let express = require('express')

let app = express()

let bodyParser = require('body-parser')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin','http://localhost:8080');  //支持全域名访问，不安全，部署后需要固定限制为客户端网址
  res.header('Access-Control-Allow-Methods','POST,GET,OPTIONS,DELETE'); //支持的http 动作
  res.header('Access-Control-Allow-Headers', 'Origin, x-requested-with,content-type, Accept, Authorization');  //响应头 请按照自己需求添加。
  if (req.method.toLowerCase() === 'options'){
    return res.end()
  }
  next();
})

app.use(bodyParser.json());
app.get('/user', (req, res) => {
  res.json({name:'zf'})
})
app.listen(3000);