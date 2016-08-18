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
    invite:(user)->
        Meteor.call 'invite',this.party._id,user._id,(error)=>
            if error then console.log 'Oops, unable to invite!' else console.log 'Invited' 

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
