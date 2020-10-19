var ev=require('events');
var ee= new ev.EventEmitter();
var http=require('http');
var url=require('url');
var exp= require('express');
var app=exp();

ee.addListener('log',function(res,re){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<!DOCTYPE html>'+
    '<html lang="en"><head>'+
        '<meta charset="UTF-8">'+
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
        '<title>Document</title>'+
    '</head><body><p>hello from nodejs</p>'+
        '<h1>'+"rome wasn't build in just one day"+'</h1>'+
    '</body></html>');
  res.end();
})

app.get("/:unit/:mass",function(req, res){
    res.send(req.params.unit+" "+req.params.mass);
    res.end();
})
app.get("/rome",function(req,res){
    u=url.parse(req.url);
    ee.emit('log',res,u);
    res.end();
    
    });
app.get("/home",function(req,res){
        res.sendFile(__dirname+'/home.html');
        console.log("hi");
        res.end();
        });
app.listen(9000);
