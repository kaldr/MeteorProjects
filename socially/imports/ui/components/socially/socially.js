var PartiesList, SociallyCtrl, angular, angularMeteor, name;

angular = require('angular');

angularMeteor = require('angular-meteor');

PartiesList = require('../partiesList/partiesList').PartiesList;

import template from './socially.html';

SociallyCtrl = (function() {
  function SociallyCtrl() {}

  return SociallyCtrl;

})();

name = 'socially';

exports.Socially = angular.module(name, [angularMeteor, PartiesList]).component(name, {
  templateUrl: template,
  controllerAs: name,
  controller: SociallyCtrl
}).name;
