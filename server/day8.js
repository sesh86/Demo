const _app=require('./config.js')
const express=require('express')
const jwt = require('jsonwebtoken');
var cors=require('cors');

app=express();

app.get('/',cors(),(req,res)=>{
    var user={id:1,user:'sesh'}
    jwt.sign(user,'secret',
    // {expiresIn:60},
    (err,token)=>{
      res.status(200).json(token);
      res.status(200).json(token);
    })
  });
  app.listen(_app.port);

  console.log('Application is running on http://localhost:'+ _app.port);  