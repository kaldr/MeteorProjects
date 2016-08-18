var Meteor, Parties;

Meteor = require('meteor/meteor').Meteor;

Parties = require('./collection').Parties;

if (Meteor.isServer) {
  Meteor.publish('parties', function() {
    var selector;
    selector = {
      $or: [
        {
          $and: [
            {
              "public": true
            }, {
              "public": {
                $exists: true
              }
            }
          ]
        }, {
          $and: [
            {
              owner: this.userId
            }, {
              owner: {
                $exists: true
              }
            }
          ]
        }
      ]
    };
    return Parties.find(selector);
  });
}
