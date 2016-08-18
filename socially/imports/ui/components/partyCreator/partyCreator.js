var DisplayNameFilter, Meteor, PartyCreatorCtrl, angular, angularMeteor, name;

angular = require('angular');

angularMeteor = require("angular-meteor");

Meteor = require("meteor/meteor").Meteor;


import template from './partyCreator.html'
;

DisplayNameFilter = require("../../filters/displayNameFilter").DisplayNameFilter;

PartyCreatorCtrl = (function() {
  function PartyCreatorCtrl($scope) {
    "ngInject";
    $scope.viewModel(this);
    this.helpers({
      creator: function() {
        var owner;
        if (!this.party) {
          return "";
        }
        owner = this.party.owner;
        console.log(owner);
        console.log(Meteor.users.findOne({
          _id: owner
        }));
        if ((Meteor.userId() !== null) && (owner === Meteor.userId())) {
          return 'me';
        }
        return (Meteor.users.findOne({
          _id: owner
        })) || 'nobody';
      }
    });
  }

  return PartyCreatorCtrl;

})();

name = 'partyCreator';

exports.PartyCreator = angular.module(name, [angularMeteor, DisplayNameFilter]).component(name, {
  templateUrl: template,
  controllerAs: name,
  controller: PartyCreatorCtrl,
  bindings: {
    party: "<"
  }
}).name;
