var Meteor, Parties, PartyDetailCtrl, angular, angularMeteor, config, name, uiRouter;

angular = require('angular');

angularMeteor = require('angular-meteor');

uiRouter = require('angular-ui-router');

Meteor = require('meteor/meteor').Meteor;

Parties = require('../../../api/parties/index').Parties;


import template from './partyDetail.html'
;

PartyDetailCtrl = (function() {
  function PartyDetailCtrl($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    this.partyId = $stateParams.partyId;
    this.subscribe('parties');
    this.subscribe('users');
    this.helpers({
      party: function() {
        return Parties.findOne({
          _id: $stateParams.partyId
        });
      },
      users: function() {
        return Meteor.users.find();
      }
    });
  }

  PartyDetailCtrl.prototype.save = function() {
    return Parties.update({
      _id: this.partyId
    }, {
      $set: {
        name: this.party.name,
        description: this.party.description,
        "public": this.party["public"]
      }
    }, (function(_this) {
      return function(error) {
        if (error) {
          return console.log('Oops,unable to update the party');
        } else {
          return console.log("Done!");
        }
      };
    })(this));
  };

  return PartyDetailCtrl;

})();

name = 'partyDetail';

config = function($stateProvider) {
  'ngInject';
  return $stateProvider.state('partyDetail', {
    url: "/parties/:partyId",
    template: '<party-detail></party-detail>',
    resolve: {
      currentUser: function($q) {
        if (Meteor.userId() === null) {
          return $q.reject("AUTH_REQUIRED");
        } else {
          return $q.resolve();
        }
      }
    }
  });
};

exports.PartyDetail = angular.module(name, [angularMeteor, uiRouter]).component(name, {
  templateUrl: template,
  controllerAs: name,
  controller: PartyDetailCtrl
}).config(config).name;
