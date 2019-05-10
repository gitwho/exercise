let express = require('express');
let app = express();
app.listen(3000);
let sliders = require('./mock/sliders')
app.get('/getSliders', function(req, res) {
  res.json(sliders)
})