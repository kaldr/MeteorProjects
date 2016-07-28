
import {Controller} from 'angular-ecmascript/module-helpers'
import Parties from '../../../collections/parties'
;
var PartiesList,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

PartiesList = (function(superClass) {
  extend(PartiesList, superClass);

  function PartiesList() {
    var _arguments;
    _arguments = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    this["arguments"] = _arguments;
    PartiesList.__super__.constructor.apply(this, this["arguments"]);
    this.helpers({
      parties: function() {
        return Parties.find({});
      }
    });
  }

  return PartiesList;

})(Controller);

PartiesList.$inject = ["$scope"];

PartiesList.$name = "PartiesListCtrl";


export default PartiesList
;
