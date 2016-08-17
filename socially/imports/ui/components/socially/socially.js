var Navigation, PartiesList, SociallyCtrl, angular, angularMeteor, config, name, uiRouter;

angular = require('angular');

angularMeteor = require('angular-meteor');

uiRouter = require('angular-ui-router');

PartiesList = require('../partiesList/partiesList').PartiesList;

Navigation = require('../navigation/navigation').Navigation;


import template from './socially.html'
;

SociallyCtrl = (function() {
  function SociallyCtrl() {}

  return SociallyCtrl;

})();

name = 'socially';

config = function($locationProvider, $urlRouterProvider) {
  'ngInject';
  $locationProvider.html5Mode(true);
  return $urlRouterProvider.otherwise('/parties');
};

exports.Socially = angular.module(name, [angularMeteor, uiRouter, Navigation, PartiesList]).component(name, {
  templateUrl: template,
  controllerAs: name,
  controller: SociallyCtrl
}).config(config).name;
