var Mongo, Parties;

Mongo = require('meteor/mongo').Mongo;

Parties = new Mongo.Collection('parties');

Parties.allow({
  insert: function(userId, party) {
    return userId && party.owner === userId;
  },
  update: function(userId, party, fileds, modifier) {
    return userId && party.owner === userId;
  },
  remove: function(userId, party) {
    return userId && party.owner === userId;
  }
});

exports.Parties = Parties;
