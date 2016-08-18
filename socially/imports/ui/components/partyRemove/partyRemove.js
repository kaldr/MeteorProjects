var Parties, PartyRemoveCtrl, angular, angularMeteor, name;

angular = require('angular');

angularMeteor = require('angular-meteor');

import template from './partyRemove.html';

Parties = require('../../../api/parties/index').Parties;

PartyRemoveCtrl = (function() {
  function PartyRemoveCtrl() {}

  PartyRemoveCtrl.prototype.remove = function() {
    if (this.party) {
      return Parties.remove(this.party._id);
    }
  };

  return PartyRemoveCtrl;

})();

name = 'partyRemove';

exports.PartyRemove = angular.module(name, [angularMeteor]).component(name, {
  templateUrl: template,
  bindings: {
    party: "<"
  },
  controllerAs: name,
  controller: PartyRemoveCtrl
}).name;
