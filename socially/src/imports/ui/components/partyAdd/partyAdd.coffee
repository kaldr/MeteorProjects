angular=require 'angular'
{Meteor}=require 'meteor/meteor'
angularMeteor=require 'angular-meteor'
{Parties}=require '../../../api/parties/index'
`import template from './partyAdd.html'`

class PartyAddCtrl
  constructor:()->
    this.party={}
  submit:->
    if Meteor.user()
      this.party.owner=Meteor.user()._id
      Parties.insert this.party
      this.reset()
    else
      console.log "Not login"
  reset:->
    this.party={}

name='partyAdd'

exports.PartyAdd=angular.module name,[angularMeteor]
  .component name,{
    templateUrl:template
    controllerAs:name
    controller:PartyAddCtrl
  }
  .name
