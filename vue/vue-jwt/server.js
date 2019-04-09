let express = require('express')
let bodyParser = require('body-parser')
let jwt = require('jsonwebtoken')

let app = express()
let secret = 'zf'

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

// app.get('/user', (req, res) => {
//   // console.log(req);
//   setTimeout(() => {
//     res.json({name:'zf'})
//   }, 1000)
// })

app.post('/login', (req, res) => {
  console.log(req.body);
  let {username} = req.body;
  if (username === 'admin') {
    res.json({
      code: 0,
      username: 'admin',
      token: jwt.sign({username: 'admin'}, secret, {
        expiresIn: 20
      })
    })
  }else {
    res.json({
      code: 1,
      err: '用户不存在'
    })
  }
})

app.get('/validate', (req, res) => {
  let token = req.headers.authorization
  jwt.verify(token, secret, (err, decode) => { // decode => {username: 'admin}
    if (err) {
      return res.json({
        code: 1,
        data: 'token失效了'
      })
    } else {
      res.json({
        username: decode.username,
        code: 0,
        // 需要把token失效延长
        token: jwt.sign({username: 'admin'}, secret, {
          expiresIn: 20
        })
      })
    }
  })
})









app.listen(3000);