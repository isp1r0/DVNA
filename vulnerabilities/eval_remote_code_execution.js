// TODO: Player has to terminate the process; code should be added to monitor, reward, and restart service
var e = require("express");
var DVNA = e();
DVNA.get('/', function(req, res) {
  var res = eval("("+req.query.e+")");
  res.send('Parameter eval():<br> ' + res);
});
DVNA.listen(6666);
