var Meteor;

Meteor = require('meteor/meteor').Meteor;

exports.Chats = new Mongo.Collection("chats");

exports.Messages = new Mongo.Collection("messages");
