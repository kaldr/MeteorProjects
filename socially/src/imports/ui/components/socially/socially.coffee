angular=require 'angular'
angularMeteor=require 'angular-meteor'
{PartiesList}=require '../partiesList/partiesList'
`import template from './socially.html'`

class SociallyCtrl

name='socially'

exports.Socially=angular.module name,[angularMeteor,PartiesList]
  .component name,{
    templateUrl:template
    controllerAs:name
    controller:SociallyCtrl
  }
  .name
