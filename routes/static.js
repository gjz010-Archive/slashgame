var express=require('express');
module.exports=function(app){
	app.use('/script',express.static(__dirname + '/public/js'));
	app.use('/assets',express.static(__dirname + '/public/assets'));
};
