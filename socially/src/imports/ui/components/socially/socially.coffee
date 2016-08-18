angular=require 'angular'
angularMeteor=require 'angular-meteor'
uiRouter=require 'angular-ui-router'

{PartiesList}=require '../partiesList/partiesList'
{Navigation}=require '../navigation/navigation'
{PartyDetail}=require '../partyDetail/partyDetail'
`
import template from './socially.html'
`

class SociallyCtrl

name='socially'

config=($locationProvider,$urlRouterProvider)->
    'ngInject'
    $locationProvider.html5Mode true
    $urlRouterProvider.otherwise '/parties'

run=($rootScope,$state)->
  'ngInject'
  $rootScope.$on '$stateChangeError',(event,toState,toParams,fromState,fromParams,error)=>
    if error=="AUTH_REQUIRED"
      $state.go 'parties'
      
exports.Socially=angular.module name,[
    angularMeteor
    uiRouter
    Navigation
    'accounts.ui'
    PartyDetail
    PartiesList
    ]
        .component name,{
            templateUrl:template
            controllerAs:name
            controller:SociallyCtrl
        }
        .config config
        .run run
        .name
