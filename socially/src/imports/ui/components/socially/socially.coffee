angular=require 'angular'
angularMeteor=require 'angular-meteor'
uiRouter=require 'angular-ui-router'

{PartiesList}=require '../partiesList/partiesList'
{Navigation}=require '../navigation/navigation'

`
import template from './socially.html'
`

class SociallyCtrl

name='socially'

config=($locationProvider,$urlRouterProvider)->
    'ngInject'
    $locationProvider.html5Mode true
    $urlRouterProvider.otherwise '/parties'

exports.Socially=angular.module name,[
    angularMeteor
    uiRouter
    Navigation
    PartiesList
    ]
        .component name,{
            templateUrl:template
            controllerAs:name
            controller:SociallyCtrl
        }
        .config config
        .name
