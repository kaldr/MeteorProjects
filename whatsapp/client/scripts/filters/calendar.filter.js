var CalendarFilter, Filter, Moment,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Moment = require('moment');

Filter = require('angular-ecmascript/module-helpers').Filter;

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

CalendarFilter.$name = 'calendar';

exports.CalendarFilter = CalendarFilter;
