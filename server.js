var express = require('express');
var server = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var User     = require('./models/user');
var User     = require('./models/dht11');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./route_api/appRoutes')(router);

server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended : true}));
server.use('/api',appRoutes);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dimension:password@ds139791.mlab.com:39791/dimensionot').then(function(){
    console.log('DB Connected');
}, function(err){
    console.log('Error Reported :-'+err);
});


server.listen(8080, function(){
    console.log('The server started');
});