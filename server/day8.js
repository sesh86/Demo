const _app=require('./config.js')
const express=require('express')
const jwt = require('jsonwebtoken');
var cors=require('cors');

app=express();

app.get('/',cors(),(req,res)=>{
    var user={id:1,user:'sesh'}
    jwt.sign(user,'secret',
    {expiresIn:10},
    (err,token)=>{
      res.status(200).json(token);
    })
  });
  app.get('/api/:token',cors(),(req,res)=>{
    var decoded = jwt.decode(req.params.token);
    if(decoded.exp<Date.now()){
      res.send('Token Expired');
    }
    res.send(decoded);
  })  
  app.listen(_app.port);

  console.log('Application is running on http://localhost:'+ _app.port);  