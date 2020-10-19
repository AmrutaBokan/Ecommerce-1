var exp= require('express');
var app= exp();


var parser=require('body-parser');
app.use(parser.urlencoded({'extended':false}));

var cookie=require('cookie-parser');
app.use(cookie());

var session=require('express-session');
app.use(session({'secret':'this'}));


app.get('/login',function(req,res){
    res.sendFile(__dirname+"/login.html");
})
app.post('/logincheck',function(req,res){

    if(req.body.uid=="maske")
    {
    //res.send("hello bakul");
    req.session.name=req.body.uid;
   res.cookie("uid","maske");
    res.redirect('/welcome')
    }
    else
    res.send("password invalid");
})
app.get('/view',function(req,res){
    if(req.session.name)
    {
        res.send("<h1>welcome "+req.cookies.uid+"</h1><br>name again "+req.session.name);
        res.send("<br><a href='/delete'>delete?</a>");
    }
    else
        res.send("cookie deleted");
    
})
app.get('/delete',function(req,res){
    res.clearCookie("uid");
    res.clearCookie("connect.sid");
    res.send("<a href='/view'>view?</a>");
})
app.all("/welcome",function(req,res){

    if(req.cookies.uid)
    {
    res.send("<h1>welcome "+req.cookies.uid+"</h1><br>name again "+req.session.name+"<br><a href='/delete'>delete?</a>");
    }
    else
    res.send("welcome guest");
})
app.listen(9000);