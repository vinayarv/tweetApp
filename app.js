'use strict'
const express = require('express');
const app = express(); //creates an application instane



app.get('/', function(req, res, next){
  console.log(res.statusCode);
  res.send("Welcome here!!");
});

// Server listening at port 3000 for incoming requests
app.listen(3000, function(){
  console.log("server listening");
});


