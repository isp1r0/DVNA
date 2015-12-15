// TODO: Tidy up this code by making use of the template and have some code flow reach this function and auto restart if a service failure is detected
var dos = require('http');

function explodeNodeJS(p) {
  for (i = 1; i <= p; ++i) {
    var f = f * i;
    console.log(f * f * f * f * f);
    console.log('[!] explodeNodeJS invoked');
    console.log('Excuse me sir, is your CPU spiking?');
  }
}

dos.createServer(function(request, response) {
 explodeNodeJS(600000);
 explodeNodeJS(700000);
 explodeNodeJS(800000);
 explodeNodeJS(900000);
 }).listen(6666, '127.0.0.1');

console.log('NodeJS DoS PoC || GTFO\n');
