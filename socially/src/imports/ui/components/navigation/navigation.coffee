angular=require 'angular'
angularMeteor=require 'angular-meteor'
`
import template from './navigation.html'
`
name='navigation'
exports.Navigation=angular.module name,[
    angularMeteor
]
    .component name,{
        templateUrl:template
        controllerAs:name
    }
    .name
