"use strict"
  var express = require("express");
  var bodyParser = require("body-parser");
  var app = express();
  var http = require('http');
  var path = require('path');
  var mongoose = require('mongoose');
  var users=require('./routes/users.js');
  var agents= require('./routes/agents');
  var properties = require('./routes/properties');
  var employees =  require('./routes/employees');



app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    app.use(express.static('public'));
   app.use('/users',users);
   app.use('/properties',properties);
   app.use('/agents',agents);
   app.use('/employees',employees);
var url= 'mongodb://localhost:27017/zameen';
mongoose.connect(url);
var db= mongoose.connection;
db.on('error',console.error.bind(console, 'connection error'));
db.on('open',function(){
    console.log(' Database connected');
});
  app.set('port', 3001);
  var server = http.createServer(app);
  server.listen(app.get('port'));
  console.log('Express server listening on port '+ app.get('port'));
  process.on('uncaughtException', function (error) {
    console.log("Error in app.js" + error.stack);
  });
