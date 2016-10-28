//------------------------------------------//
// Get all requires
//------------------------------------------//
var express  = require('express');

var flash    = require('connect-flash');
var multer  = require('multer');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('logger');
var path = require('path');





var routesPhones=require('./routes/phones');
var routesPhoneImages=require('./routes/phone-images');

//set port for listening
var port = process.env.PORT || 3000;
//set environment
var env=process.env.NODE_ENV || 'dev';

//create app
var app= express();

//------------------------------------------//
// set up our express application           //
//------------------------------------------//
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: true,limit: '5mb'}));

//------------------------------------------//
// Set route static contents
//------------------------------------------//
if(env=='dev'){
	app.use('/',express.static(path.resolve(__dirname, '../client')));
	console.log('ENV DEVELOPMENT '+ path.resolve(__dirname, '../client'));
}else{
	app.use('/',express.static(path.resolve(__dirname, '../client/dist')));
	console.log('ENV PRODUCTION '+ path.resolve(__dirname, '../dist'));
}

//------------------------------------------//
// Set interceptor http
//------------------------------------------//
app.use(function(req, res, next) {
  // Put some preprocessing here.
  next();
});

//------------------------------------------//
// Set route api rest
//------------------------------------------//
app.use('/api', routesPhones);
app.use('/api', routesPhoneImages);

//------------------------------------------//
// Set error handlers
//------------------------------------------//
// log error
app.use(function(err, req, res, next) {
  console.error(err.stack);
  next(err);
});
// response error to client
app.use(function(err, req, res, next) {
   if (req.xhr) {
    res.status(500).send({ error: 'Ha ocurrido un error:'+err.stack });
  } else {
    next(err);
  }
});

//------------------------------------------//
// launch
//------------------------------------------//
app.listen(port);
console.log('Listening in port ' + port);



