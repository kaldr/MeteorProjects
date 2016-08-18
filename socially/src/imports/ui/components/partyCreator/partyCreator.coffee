angular=require 'angular'
angularMeteor=require "angular-meteor"
{Meteor}=require "meteor/meteor"
`
import template from './partyCreator.html'
`
{DisplayNameFilter}=require "../../filters/displayNameFilter"

class PartyCreatorCtrl
    constructor:($scope)->
        "ngInject"
        $scope.viewModel this

        this.helpers {
            creator:->
                return "" if not this.party
                owner=this.party.owner
                console.log owner
                console.log Meteor.users.findOne {_id:owner}
                return 'me' if (Meteor.userId()!=null) and (owner == Meteor.userId())
                return (Meteor.users.findOne {_id:owner}) or 'nobody'
        }

name='partyCreator'

exports.PartyCreator=angular.module name,[
    angularMeteor,DisplayNameFilter
]
    .component name,{
        templateUrl:template
        controllerAs:name
        controller:PartyCreatorCtrl
        bindings:
            party:"<"
    }
    .name
