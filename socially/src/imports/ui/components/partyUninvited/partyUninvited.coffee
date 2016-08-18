angular=require 'angular'
angularMeteor=require 'angular-meteor'
{Meteor}=require 'meteor/meteor'
`
import template from './partyUninvited.html'
`
{UninvitedFilter}=require "../../filters/uninvitedFilter"
{DisplayNameFilter}=require "../../filters/displayNameFilter"
class PartyUninvitedCtrl
    constructor:($scope)->
        'ngInject'
        $scope.viewModel this
        this.helpers {
            users:->Meteor.users.find()
        }
name='partyUninvited'

exports.PartyUninvited=angular.module name,[angularMeteor,UninvitedFilter,DisplayNameFilter]
    .component name,{
        templateUrl:template
        controllerAs:name
        controller:PartyUninvitedCtrl
        bindings:
            party:"<"
    }
    .name
