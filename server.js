var express = require('express');
var app = express();
app.get('/', function(req, res) {
  var resp=eval("("+req.query.name+")");
  res.send('Respones<?br>'+resp);
  });
app.listen(9000);
