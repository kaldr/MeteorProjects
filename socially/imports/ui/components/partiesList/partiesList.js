var Parties, PartiesListCtrl, PartyAdd, PartyRemove, angular, angularMeteor, name;

angular = require('angular');

angularMeteor = require('angular-meteor');

Parties = require('../../../api/parties.js').Parties;

PartyAdd = require('../partyAdd/partyAdd').PartyAdd;

PartyRemove = require('../partyRemove/partyRemove').PartyRemove;

import templateUrl from './partiesList.html';

PartiesListCtrl = (function() {
  function PartiesListCtrl($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    this.helpers({
      parties: function() {
        return Parties.find();
      }
    });
  }

  return PartiesListCtrl;

})();

name = 'partiesList';

exports.PartiesList = angular.module(name, [angularMeteor, PartyAdd, PartyRemove]).component(name, {
  templateUrl: templateUrl,
  controllerAs: name,
  controller: PartiesListCtrl
}).name;
