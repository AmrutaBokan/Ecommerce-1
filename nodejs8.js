var exp=require('express');
var app=exp();
app.listen(9000,function(){
    console.log("hello");
});
app.get('/home',function(req,res){
    res.send("<h>home page</h>");
});
app.post('/products',function(req,res){
    res.send("blblblblb");
});
