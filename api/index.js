var restify = require('restify');
var mongoose = require('mongoose');
var restifyMongoose = require('../index.js');
var models = require('./models');

mongoose.connect('mongodb://localhost/restify-mongoose-examples');

var server = restify.createServer({
  name: 'restify.mongoose.examples.notes', 
  version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());


