var Parties;

Parties = require('../collections/parties.js').Parties;

Meteor.startup((function(_this) {
  return function() {
    var parties;
    if (Parties.find().count() === 0) {
      parties = [
        {
          'name': 'Dubstep-Free Zone',
          'description': 'Can we please just for an evening not listen to dubstep.'
        }, {
          'name': 'All dubstep all the time',
          'description': 'Get it on!'
        }, {
          'name': 'Savage lounging',
          'description': 'Leisure suit required. And only fiercest manners.'
        }
      ];
      return parties.forEach(function(party) {
        return Parties.insert(party);
      });
    }
  };
})(this));
