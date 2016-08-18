var PartiesSortCtrl, angular, angularMeteor, name;

angular = require('angular');

angularMeteor = require('angular-meteor');


import template from './partiesSort.html'
;

PartiesSortCtrl = (function() {
  function PartiesSortCtrl() {
    this.changed();
  }

  PartiesSortCtrl.prototype.changed = function() {
    var sortOb;
    sortOb = {};
    sortOb[this.property] = parseInt(this.order);
    return this.onChange({
      sort: sortOb
    });
  };

  return PartiesSortCtrl;

})();

name = 'partiesSort';

exports.PartiesSort = angular.module(name, [angularMeteor]).component(name, {
  templateUrl: template,
  bindings: {
    onChange: '&',
    property: '@',
    order: '@'
  },
  controllerAs: name,
  controller: PartiesSortCtrl
}).name;
