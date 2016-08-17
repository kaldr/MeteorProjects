var Parties, PartyAddCtrl, angular, angularMeteor, name;

angular = require('angular');

angularMeteor = require('angular-meteor');

Parties = require('../../../api/parties').Parties;

import template from './partyAdd.html';

PartyAddCtrl = (function() {
  function PartyAddCtrl() {
    this.party = {};
  }

  PartyAddCtrl.prototype.submit = function() {
    Parties.insert(this.party);
    return this.reset();
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
