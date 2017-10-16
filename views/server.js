var express = require('express');
var routes = require('./routes/user');
var logger = require('morgan');
var mongoose= require('mongoose');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
var db = mongoose.connect('mongodb://localhost/SampleDatabase'); //for establishing connection & mongodb server must be started and Sampledatabse is name of db

app.use(logger('dev'));
app.use('/', routes);

app.listen(7000, function(req, res){
	console.log('Server is running on port 7000...');
});
