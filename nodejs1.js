var http = require('http');
var dt = require('./nodejs2');

var ser=http.createServer(function(req,res){

if(req.url=='/pro')
{
    res.writeHead(200,{'Content-Type':'text/html'});
res.write(dt.mydate());
console.log("hello");
res.end();
}
});
console.log("server started on 9000");
ser.listen(9000);