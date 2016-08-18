var Counts, Parties, PartiesListCtrl, PartiesSort, PartyAdd, PartyRemove, angular, angularMeteor, config, name, uiRouter, utilsPagination;

angular = require('angular');

angularMeteor = require('angular-meteor');

uiRouter = require('angular-ui-router');

utilsPagination = require('angular-utils-pagination');

Counts = require('meteor/tmeasday:publish-counts').Counts;

Parties = require('../../../api/parties/index').Parties;

PartyAdd = require('../partyAdd/partyAdd').PartyAdd;

PartyRemove = require('../partyRemove/partyRemove').PartyRemove;

PartiesSort = require('../partiesSort/partiesSort').PartiesSort;

import templateUrl from './partiesList.html';

PartiesListCtrl = (function() {
  function PartiesListCtrl($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    this.perPage = 3;
    this.page = 1;
    this.sort = {
      name: 1
    };
    this.searchText = '';
    this.subscribe('parties', () => [{
        limit: parseInt(this.perPage),
        skip: parseInt((this.getReactively('page') - 1) * this.perPage),
        sort: this.getReactively('sort')
      }, this.getReactively('searchText')
    ]);;
    this.helpers({
      parties: function() {
        return Parties.find({}, {
          sort: this.getReactively('sort')
        });
      },
      partiesCount: function() {
        return Counts.get('numberOfParties');
      }
    });
  }

  PartiesListCtrl.prototype.pageChanged = function(newPage) {
    return this.page = newPage;
  };

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

exports.PartiesList = angular.module(name, [angularMeteor, uiRouter, PartyAdd, PartyRemove, PartiesSort, utilsPagination]).component(name, {
  templateUrl: templateUrl,
  controllerAs: name,
  controller: PartiesListCtrl
}).config(config).name;
