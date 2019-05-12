let express = require('express');
let app = express();
let cors = require('cors')
app.listen(3000);
app.use(cors());

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
  let list = lessons;
  let total = list.length;
  if(category != "all") {
    list = lessons.filter(item => item.category == category)
  }
  list = list.slice(offset, offset+limit) // 每次返回的分页数据
  res.json({
    list,
    hasMore: total > offset+limit
  });
})