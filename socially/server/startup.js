
import {Meteor} from  'meteor/meteor';
import Parties from '../collections/parties'
;
Meteor.startup((function(_this) {
  return function() {
    var parties;
    if (Parties.find().count() === 0) {
      parties = [
        {
          'name': 'Dubstep-Free Zone',
          'description': 'Fast just got faster with Nexus S.'
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
