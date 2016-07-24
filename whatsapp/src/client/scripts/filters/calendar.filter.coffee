`
import Moment from 'moment'
import {Filter} from 'angular-ecmascript/module-helpers'
`
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
`
export default CalendarFilter
`
