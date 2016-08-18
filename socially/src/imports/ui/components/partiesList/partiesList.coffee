angular = require 'angular'
angularMeteor = require 'angular-meteor'
uiRouter=require 'angular-ui-router'
{Parties}=require '../../../api/parties/index'
{PartyAdd}=require '../partyAdd/partyAdd'
{PartyRemove}=require '../partyRemove/partyRemove'

`import templateUrl from './partiesList.html'`

class PartiesListCtrl
    constructor:($scope,$reactive)->
      'ngInject'
      $reactive this
        .attach $scope
      this.subscribe 'parties'
      this.helpers {
        parties:->Parties.find()
      }

config=($stateProvider)->
  'ngInject'
  $stateProvider
    .state 'parties',{
      url:'/parties'
      template:'<parties-list></parties-list>'
    }

name = 'partiesList'

exports.PartiesList=angular.module name,[
  angularMeteor
  uiRouter
  PartyAdd
  PartyRemove
]
  .component name,{
    templateUrl:templateUrl
    controllerAs:name
    controller:PartiesListCtrl
  }
  .config config
  .name
