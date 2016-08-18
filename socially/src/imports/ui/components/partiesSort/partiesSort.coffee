angular=require 'angular'
angularMeteor=require 'angular-meteor'
`
import template from './partiesSort.html'
`
class PartiesSortCtrl
  constructor:->
    this.changed()
  changed:->
    sortOb={}
    sortOb[this.property]= parseInt this.order
    this.onChange {
      sort:sortOb
    }

name='partiesSort'
exports.PartiesSort=angular.module name,[angularMeteor]
  .component name,{
    templateUrl:template
    bindings:
      onChange:'&'
      property:'@'
      order:'@'
    controllerAs:name
    controller:PartiesSortCtrl
  }
  .name
