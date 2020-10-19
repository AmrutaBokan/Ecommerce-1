var http=require('http');
var fs= require('fs');
cnt=0;
dat="";
var ser=http.createServer(function(req,res){
    if(req.url=='/favicon.ico')
    return;
    cnt++;
res.writeHead(200,{'Content-Type':'text/html'});
fs.readFile("refresh.txt",function(err,data){
    console.log(data.toString());
    dat=data.toString();
});
fs.writeFile('refresh.txt',cnt,function(err){});
res.write("visit count : "+dat);
return res.end();
});
ser.listen(9000);