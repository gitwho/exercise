let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();
let cors = require('cors'); // 解决跨域
app.listen(3000);
app.use(cors());
app.use(bodyParser.json());
app.use(session({
  resave: true,
  secret: 'secret',
  saveUninitialized: true
}))
let sliders = require('./mock/sliders')
app.get('/getSliders', function(req, res) {
  res.json(sliders)
})

// http://localhost:3000/getLessons/vue?offset=0&limit=5
let lessons = require('./mock/lessons');
app.get('/getLessons/:category', function(req, res){
  let category = req.params.category;
  let {offset, limit} = req.query;
  offset = isNaN(offset)?0:parseInt(offset); // 偏移量
  limit = isNaN(limit)?5:parseInt(limit); // 每条页数
  let list = JSON.parse(JSON.stringify(lessons)); // 复制一份
  let total = list.length;
  if(category != "all") {
    list = list.filter(item => item.category == category)
  }

  list = list.slice(offset, offset+limit) // 每次返回的分页数据

  list.forEach((item) => {item.title = item.title + Math.random()}) // 做标记，更新
  setTimeout(() => {
    res.json({
      list,
      hasMore: total > offset+limit
    });
  }, 1000)
  
})

let details = require('./mock/lessons');
app.get('/getDetail/:id', function(req, res){
  let id = req.params.id;
  let detail = details.filter(item => item.id == id);
  res.json(detail)
})

let users=[];
app.post('/reg', function(req, res){
  console.log(req.body); //
  let user = req.body;
  users.push(user);
  res.json({
    success: '注册成功'
  })
});

app.post('/login', function(req, res){
  console.log(req.body); // {username password}
  let user = req.body;
  let a = users.filter(item => user.username == item.username && user.password == item.password);
  if (a){
    req.session.user = user; // 
    res.json({
      a,
      success: '登录成功'
    })
  }else {
    res.json({
      error: '登录失败'
    })
  }
})