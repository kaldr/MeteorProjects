var Parties, PartiesListCtrl, angular, angularMeteor;

angular = require('angular');

angularMeteor = require('angular-meteor');

Parties = require('../collections/parties.js').Parties;

PartiesListCtrl = function($scope, $reactive) {
  'ngInject';
  $reactive(this).attach($scope);
  return this.helpers({
    parties: function() {
      return Parties.find();
    }
  });
};

angular.module('socially', [angularMeteor]).controller('PartiesListCtrl', PartiesListCtrl);
