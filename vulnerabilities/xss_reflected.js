// inject <img src=x onerror=alert(0)> for flag
var http = require("http");
var url = require("url");
http.createServer(function(req, res){
  var parsedUrl = url.parse(req.url, true);
  res.writeHead(200, {"Content-Type":"text/html"});
  res.write("Unsanitized input: " + parsedUrl.query.xss);
  res.end();
}).listen(6666);
