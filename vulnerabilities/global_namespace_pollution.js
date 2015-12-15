// TODO: Need to standardize template for vulnerabilities
var express = require('express');
var app = express();
// Challenge could be to pollute the namespace with the flag hashes
var global = 0
app.get('/', function(req, res) {
  global = global + 1;
  res.send('<h2>Issue: Global Namespace Pollution</h2>'+'Global Scope Polluted Variable: ' + global)
});
app.listen(6666);
