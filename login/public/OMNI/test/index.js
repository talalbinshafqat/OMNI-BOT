const express=require('express');
const app=express();

app.set('view engine','ejs');
app.get('/',function(req,res){
    res.render('signup');
});
app.get('/',function(req,res){
    res.render('styles');
});
app.use(express.static('img'));
var server=app.listen(4000,function(){
    console.log("go to port number 4000");
});