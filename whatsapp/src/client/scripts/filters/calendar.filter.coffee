
Moment = require 'moment'
{Filter} = require 'angular-ecmascript/module-helpers'

class CalendarFilter extends Filter
    filter:(time)->
        if !time
          return
        Moment time
        .calendar null,
            lastDay:'[Yesterday]'
            sameDay:'LT'
            lastWeek:'dddd'
            sameElse:"DD/MM/YY"
CalendarFilter.$name='calendar'

exports.CalendarFilter=CalendarFilter
