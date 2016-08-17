angular = require 'angular'
angularMeteor = require 'angular-meteor'
{Parties} = require '../../../api/parties.js'
{PartyAdd}=require '../partyAdd/partyAdd'
{PartyRemove}=require '../partyRemove/partyRemove'

`import templateUrl from './partiesList.html'`

class PartiesListCtrl
    constructor:($scope,$reactive)->
      'ngInject'
      $reactive this
        .attach $scope
      this.helpers {
        parties:->Parties.find()
      }

name = 'partiesList'

exports.PartiesList=angular.module name,[angularMeteor,PartyAdd,PartyRemove]
  .component name,{
    templateUrl:templateUrl
    controllerAs:name
    controller:PartiesListCtrl
  }
  .name
