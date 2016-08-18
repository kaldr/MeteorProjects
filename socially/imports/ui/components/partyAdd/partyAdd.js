var Meteor, Parties, PartyAddCtrl, angular, angularMeteor, name;

angular = require('angular');

Meteor = require('meteor/meteor').Meteor;

angularMeteor = require('angular-meteor');

Parties = require('../../../api/parties/index').Parties;

import template from './partyAdd.html';

PartyAddCtrl = (function() {
  function PartyAddCtrl() {
    this.party = {};
  }

  PartyAddCtrl.prototype.submit = function() {
    if (Meteor.user()) {
      this.party.owner = Meteor.user()._id;
      Parties.insert(this.party);
      return this.reset();
    } else {
      return console.log("Not login");
    }
  };

  PartyAddCtrl.prototype.reset = function() {
    return this.party = {};
  };

  return PartyAddCtrl;

})();

name = 'partyAdd';

exports.PartyAdd = angular.module(name, [angularMeteor]).component(name, {
  templateUrl: template,
  controllerAs: name,
  controller: PartyAddCtrl
}).name;
