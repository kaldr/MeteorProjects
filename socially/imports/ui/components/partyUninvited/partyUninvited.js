var DisplayNameFilter, Meteor, PartyUninvitedCtrl, UninvitedFilter, angular, angularMeteor, name;

angular = require('angular');

angularMeteor = require('angular-meteor');

Meteor = require('meteor/meteor').Meteor;


import template from './partyUninvited.html'
;

UninvitedFilter = require("../../filters/uninvitedFilter").UninvitedFilter;

DisplayNameFilter = require("../../filters/displayNameFilter").DisplayNameFilter;

PartyUninvitedCtrl = (function() {
  function PartyUninvitedCtrl($scope) {
    'ngInject';
    $scope.viewModel(this);
    this.helpers({
      users: function() {
        return Meteor.users.find();
      }
    });
  }

  PartyUninvitedCtrl.prototype.invite = function(user) {
    return Meteor.call('invite', this.party._id, user._id, (function(_this) {
      return function(error) {
        if (error) {
          return console.log('Oops, unable to invite!');
        } else {
          return console.log('Invited');
        }
      };
    })(this));
  };

  return PartyUninvitedCtrl;

})();

name = 'partyUninvited';

exports.PartyUninvited = angular.module(name, [angularMeteor, UninvitedFilter, DisplayNameFilter]).component(name, {
  templateUrl: template,
  controllerAs: name,
  controller: PartyUninvitedCtrl,
  bindings: {
    party: "<"
  }
}).name;
