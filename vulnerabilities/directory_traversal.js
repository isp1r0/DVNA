// Load a remote file in order to capture flag
var http = require("http"),
    fs = require("fs"),
    p = require("path");

var e = require("express");
var DVNA = e();

// TODO: Handle ENOENT error exception when the flag isn't loaded as this will crash node otherwise
DVNA.get('/', function(req, res){
  var filePath = p.join(__dirname, '/' + req.query.traverse);
  var readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});
DVNA.listen(6666);
