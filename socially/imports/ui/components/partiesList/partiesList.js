var Parties, PartiesListCtrl, PartyAdd, PartyRemove, angular, angularMeteor, config, name, uiRouter;

angular = require('angular');

angularMeteor = require('angular-meteor');

uiRouter = require('angular-ui-router');

Parties = require('../../../api/parties/index').Parties;

PartyAdd = require('../partyAdd/partyAdd').PartyAdd;

PartyRemove = require('../partyRemove/partyRemove').PartyRemove;

import templateUrl from './partiesList.html';

PartiesListCtrl = (function() {
  function PartiesListCtrl($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    this.subscribe('parties');
    this.helpers({
      parties: function() {
        return Parties.find();
      }
    });
  }

  return PartiesListCtrl;

})();

config = function($stateProvider) {
  'ngInject';
  return $stateProvider.state('parties', {
    url: '/parties',
    template: '<parties-list></parties-list>'
  });
};

name = 'partiesList';

exports.PartiesList = angular.module(name, [angularMeteor, uiRouter, PartyAdd, PartyRemove]).component(name, {
  templateUrl: templateUrl,
  controllerAs: name,
  controller: PartiesListCtrl
}).config(config).name;
