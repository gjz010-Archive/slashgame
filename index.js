var express=require('express');
var app=express();
var http=require('http').Server(app);
var routes=require('./routes');
app.get('/game', function(req, res){
  res.sendfile('public/game.html');
});
routes(app);
app.listen(3000);
