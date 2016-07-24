
import Moment from 'moment'
import {Filter} from 'angular-ecmascript/module-helpers'
;
var CalendarFilter,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

CalendarFilter = (function(superClass) {
  extend(CalendarFilter, superClass);

  function CalendarFilter() {
    return CalendarFilter.__super__.constructor.apply(this, arguments);
  }

  CalendarFilter.prototype.filter = function(time) {
    if (!time) {
      return;
    }
    return Moment(time).calendar(null, {
      lastDay: '[Yesterday]',
      sameDay: 'LT',
      lastWeek: 'dddd',
      sameElse: "DD/MM/YY"
    });
  };

  return CalendarFilter;

})(Filter);


export default CalendarFilter
;
