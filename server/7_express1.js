var express = require ('express');
var fs=require('fs');
var app=express();

app.get('/',function(req,res){
  //res.send('Home Page');
  var readStream=fs.createReadStream(__dirname+'/index.html','utf8');
  readStream.pipe(res);
});

app.get('/contact',function(req,res){
  var readStream=fs.createReadStream(__dirname+'/contact.html','utf8');
  readStream.pipe(res);
  //res.send('contact Page');
});

app.get('/profile/:name',function(req,res){
  res.send('You are in '+req.params.name+"'s profile");
});
app.listen(3000);
