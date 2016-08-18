angular=require 'angular'
angularMeteor=require 'angular-meteor'
`import template from './partyRemove.html'`
{Parties}=require '../../../api/parties/index'
class PartyRemoveCtrl
  remove:->
    if this.party
      Parties.remove this.party._id

name='partyRemove'

exports.PartyRemove=angular.module name,[angularMeteor]
  .component name,{
    templateUrl:template
    bindings:
      party:"<"
    controllerAs:name
    controller:PartyRemoveCtrl
  }
  .name
