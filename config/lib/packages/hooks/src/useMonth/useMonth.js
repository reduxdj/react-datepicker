import {useMemo} from 'react'
import format from 'date-fns/format'
import {getDays, getWeekdayLabels} from './useMonth.utils'
export var dayLabelFormatFn = function(date) {
  return format(date, 'dd')
}
export var weekdayLabelFormatFn = function(date) {
  return format(date, 'eeeeee')
}
export var monthLabelFormatFn = function(date) {
  return format(date, 'MMMM yyyy')
}
export function useMonth(_a) {
  var year = _a.year,
    month = _a.month,
    _b = _a.firstDayOfWeek,
    firstDayOfWeek = _b === void 0 ? 1 : _b,
    _c = _a.dayLabelFormat,
    dayLabelFormat = _c === void 0 ? dayLabelFormatFn : _c,
    _d = _a.weekdayLabelFormat,
    weekdayLabelFormat = _d === void 0 ? weekdayLabelFormatFn : _d,
    _e = _a.monthLabelFormat,
    monthLabelFormat = _e === void 0 ? monthLabelFormatFn : _e
  var days = useMemo(
    function() {
      return getDays({
        year: year,
        month: month,
        firstDayOfWeek: firstDayOfWeek,
        dayLabelFormat: dayLabelFormat,
      })
    },
    [year, month, firstDayOfWeek, dayLabelFormat],
  )
  var weekdayLabels = useMemo(
    function() {
      return getWeekdayLabels({
        firstDayOfWeek: firstDayOfWeek,
        weekdayLabelFormat: weekdayLabelFormat,
      })
    },
    [firstDayOfWeek, weekdayLabelFormat],
  )
  return {
    days: days,
    weekdayLabels: weekdayLabels,
    monthLabel: monthLabelFormat(new Date(year, month)),
  }
}
//# sourceMappingURL=useMonth.js.map
