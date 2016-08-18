var Counts, Meteor, Parties;

Meteor = require('meteor/meteor').Meteor;

Parties = require('./collection').Parties;

Counts = require('meteor/tmeasday:publish-counts').Counts;

if (Meteor.isServer) {
  Meteor.publish('parties', function(options, searchString) {
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
    if (typeof searchString === 'string' && searchString.length) {
      selector.name = {
        $regex: `.*${searchString}.*`,
        $options: 'i'
      };
    }
    Counts.publish(this, 'numberOfParties', Parties.find(selector), {
      noReady: true
    });
    return Parties.find(selector, options);
  });
}
