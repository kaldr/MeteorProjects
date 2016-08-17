angular=require 'angular'
angularMeteor=require 'angular-meteor'
{Parties}=require '../../../api/parties'
`import template from './partyAdd.html'`

class PartyAddCtrl
  constructor:->
    this.party={}
  submit:->
    Parties.insert this.party
    this.reset()
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
