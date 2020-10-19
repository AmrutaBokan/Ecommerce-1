var mongoose =require('mongoose');
var bodypar= require('body-parser');
var exp=require('express');
var app=exp();
app.set('view engine','pug');
app.set('views','./views');
app.use(bodypar.urlencoded({'extended':false}));
app.get('/register',function(req,res){

    res.render('register');

});
mongoose.connect("mongodb://localhost:27017/test");

var personschema=mongoose.Schema({
    name:String,
    age:Number,
    nationality:String
});
var per=mongoose.model("person",personschema);
app.post('/insert',function(req,res){

    var newperson=new per({
        name:req.body.nm,
        age:req.body.age,
        nationality:req.body.nat
    });
    newperson.save(function(err,inperson){
        if(!err)
        res.send(inperson.name+" has been saved");

    })
});
app.listen(9000,function(){
    console.log("server at 9000");
});