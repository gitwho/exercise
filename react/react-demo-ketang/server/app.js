let express = require('express');
let app = express();
let cors = require('cors')
app.listen(3000);
app.use(cors());
let sliders = require('./mock/sliders')
app.get('/getSliders', function(req, res) {
  res.json(sliders)
})