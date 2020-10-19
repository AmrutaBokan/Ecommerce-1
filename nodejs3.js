var http = require('http');
var module = require('./nodejs4');

var ser = http.createServer(function(req,res){

res.writeHead(200,{'Content-Type':'text/http'});
res.write("given number is "+module.isprime(13));
res.end();
});
console.log("server started on port 9000");
ser.listen(9000);