var exp=require('express');
var app= exp();


app.use(exp.static('images'));
app.set('view engine','pug');
app.set('views','./views');
app.get('/first',function(req,res){

    res.render('first');
});
app.listen(9000);