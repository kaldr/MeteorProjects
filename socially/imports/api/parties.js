var Mongo;

Mongo = require('meteor/mongo').Mongo;

exports.Parties = new Mongo.Collection('parties');
