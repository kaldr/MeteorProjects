var Navigation, PartiesList, PartyDetail, SociallyCtrl, angular, angularMeteor, config, name, run, uiRouter;

angular = require('angular');

angularMeteor = require('angular-meteor');

uiRouter = require('angular-ui-router');

PartiesList = require('../partiesList/partiesList').PartiesList;

Navigation = require('../navigation/navigation').Navigation;

PartyDetail = require('../partyDetail/partyDetail').PartyDetail;


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

run = function($rootScope, $state) {
  'ngInject';
  return $rootScope.$on('$stateChangeError', (function(_this) {
    return function(event, toState, toParams, fromState, fromParams, error) {
      if (error === "AUTH_REQUIRED") {
        return $state.go('parties');
      }
    };
  })(this));
};

exports.Socially = angular.module(name, [angularMeteor, uiRouter, Navigation, 'accounts.ui', PartyDetail, PartiesList]).component(name, {
  templateUrl: template,
  controllerAs: name,
  controller: SociallyCtrl
}).config(config).run(run).name;
