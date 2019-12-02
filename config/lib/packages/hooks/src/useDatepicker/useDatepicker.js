import {useState, useCallback, useEffect} from 'react'
import isBefore from 'date-fns/isBefore'
import isAfter from 'date-fns/isAfter'
import addDays from 'date-fns/addDays'
import isWithinRange from 'date-fns/isWithinInterval'
import isSameDay from 'date-fns/isSameDay'
import isSameMonth from 'date-fns/isSameDay'
import {
  getInitialMonths,
  getNextActiveMonth,
  isDateSelected as isDateSelectedFn,
  isDateBlocked as isDateBlockedFn,
  isFirstOrLastSelectedDate as isFirstOrLastSelectedDateFn,
  canSelectRange,
  isDateHovered as isDateHoveredFn,
} from './useDatepicker.utils'
export var START_DATE = 'startDate'
export var END_DATE = 'endDate'
export function useDatepicker(_a) {
  var startDate = _a.startDate,
    endDate = _a.endDate,
    focusedInput = _a.focusedInput,
    minBookingDate = _a.minBookingDate,
    maxBookingDate = _a.maxBookingDate,
    onDatesChange = _a.onDatesChange,
    _b = _a.exactMinBookingDays,
    exactMinBookingDays = _b === void 0 ? false : _b,
    _c = _a.minBookingDays,
    minBookingDays = _c === void 0 ? 1 : _c,
    _d = _a.numberOfMonths,
    numberOfMonths = _d === void 0 ? 2 : _d,
    _e = _a.firstDayOfWeek,
    firstDayOfWeek = _e === void 0 ? 1 : _e,
    _f = _a.isDateBlocked,
    isDateBlockedProps =
      _f === void 0
        ? function() {
            return false
          }
        : _f
  var _g = useState(function() {
      return getInitialMonths(numberOfMonths, startDate)
    }),
    activeMonths = _g[0],
    setActiveMonths = _g[1]
  var _h = useState(null),
    hoveredDate = _h[0],
    setHoveredDate = _h[1]
  var _j = useState(startDate),
    focusedDate = _j[0],
    setFocusedDate = _j[1]
  var onDateFocus = useCallback(
    function(date) {
      setFocusedDate(date)
      if (!focusedDate || (focusedDate && !isSameMonth(date, focusedDate))) {
        setActiveMonths(getInitialMonths(numberOfMonths, date))
      }
    },
    [setFocusedDate, setActiveMonths, numberOfMonths, focusedDate],
  )
  var isDateSelected = useCallback(
    function(date) {
      return isDateSelectedFn(date, startDate, endDate)
    },
    [startDate, endDate],
  )
  var isFirstOrLastSelectedDate = useCallback(
    function(date) {
      return isFirstOrLastSelectedDateFn(date, startDate, endDate)
    },
    [startDate, endDate],
  )
  var isDateBlocked = useCallback(
    function(date) {
      return isDateBlockedFn({
        date: date,
        minBookingDate: minBookingDate,
        maxBookingDate: maxBookingDate,
        startDate: startDate,
        endDate: endDate,
        minBookingDays: minBookingDays,
        isDateBlockedFn: isDateBlockedProps,
      })
    },
    [minBookingDate, maxBookingDate, startDate, endDate, minBookingDays, isDateBlockedProps],
  )
  var isDateFocused = useCallback(
    function(date) {
      return focusedDate ? isSameDay(date, focusedDate) : false
    },
    [focusedDate],
  )
  var isDateHovered = useCallback(
    function(date) {
      return isDateHoveredFn({
        date: date,
        hoveredDate: hoveredDate,
        startDate: startDate,
        endDate: endDate,
        minBookingDays: minBookingDays,
        exactMinBookingDays: exactMinBookingDays,
        isDateBlocked: isDateBlockedProps,
      })
    },
    [hoveredDate, startDate, endDate, minBookingDays, exactMinBookingDays, isDateBlockedProps],
  )
  useEffect(function() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown)
    }
    return function() {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })
  function handleKeyDown(e) {
    if (
      (e.key === 'ArrowRight' ||
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowDown' ||
        e.key === 'ArrowUp') &&
      !focusedDate
    ) {
      var activeMonth = activeMonths[0]
      onDateFocus(activeMonth.date)
      setActiveMonths(getInitialMonths(numberOfMonths, activeMonth.date))
    }
  }
  function onResetDates() {
    onDatesChange({
      startDate: null,
      endDate: null,
      focusedInput: START_DATE,
    })
  }
  function onDateSelect(date) {
    if (
      (focusedInput === END_DATE || focusedInput === START_DATE) &&
      minBookingDays > 0 &&
      exactMinBookingDays &&
      canSelectRange({
        minBookingDays: minBookingDays,
        exactMinBookingDays: exactMinBookingDays,
        minBookingDate: minBookingDate,
        maxBookingDate: maxBookingDate,
        isDateBlocked: isDateBlockedProps,
        startDate: date,
        endDate: null,
      })
    ) {
      onDatesChange({
        startDate: date,
        endDate: addDays(date, minBookingDays - 1),
        focusedInput: null,
      })
    } else if (
      ((focusedInput === END_DATE && startDate && isBefore(date, startDate)) ||
        (focusedInput === START_DATE && endDate && isAfter(date, endDate))) &&
      !exactMinBookingDays &&
      canSelectRange({
        minBookingDays: minBookingDays,
        isDateBlocked: isDateBlockedProps,
        startDate: date,
        endDate: null,
      })
    ) {
      onDatesChange({
        endDate: null,
        startDate: date,
        focusedInput: END_DATE,
      })
    } else if (
      focusedInput === START_DATE &&
      !exactMinBookingDays &&
      canSelectRange({
        minBookingDays: minBookingDays,
        isDateBlocked: isDateBlockedProps,
        endDate: endDate,
        startDate: date,
      })
    ) {
      onDatesChange({
        endDate: endDate,
        startDate: date,
        focusedInput: END_DATE,
      })
    } else if (
      focusedInput === START_DATE &&
      !exactMinBookingDays &&
      canSelectRange({
        minBookingDays: minBookingDays,
        isDateBlocked: isDateBlockedProps,
        endDate: null,
        startDate: date,
      })
    ) {
      onDatesChange({
        endDate: null,
        startDate: date,
        focusedInput: END_DATE,
      })
    } else if (
      focusedInput === END_DATE &&
      startDate &&
      !isBefore(date, startDate) &&
      !exactMinBookingDays &&
      canSelectRange({
        minBookingDays: minBookingDays,
        isDateBlocked: isDateBlockedProps,
        startDate: startDate,
        endDate: date,
      })
    ) {
      onDatesChange({
        startDate: startDate,
        endDate: date,
        focusedInput: null,
      })
    }
    if (
      focusedInput !== END_DATE &&
      (!focusedDate || (focusedDate && !isSameMonth(date, focusedDate)))
    ) {
      setActiveMonths(getInitialMonths(numberOfMonths, date))
    }
  }
  function onDateHover(date) {
    if (!date) {
      setHoveredDate(null)
    } else if (date) {
      var isNotBlocked = !isDateBlocked(date) || (startDate && isSameDay(date, startDate))
      var isHoveredDateAfterOrEqualMinDate = minBookingDate
        ? !isBefore(date, addDays(minBookingDate, -1))
        : true
      var isHoveredDateBeforeOrEqualMaxDate = maxBookingDate ? !isAfter(date, maxBookingDate) : true
      // Exact minimal booking days
      var potentialEndDate = addDays(date, minBookingDays - 1)
      var isPotentialEndDateAfterOrEqualMinDate = minBookingDate
        ? !isBefore(potentialEndDate, minBookingDate)
        : true
      var isPotentialEndDateBeforeOrEqualMaxDate = maxBookingDate
        ? !isAfter(potentialEndDate, maxBookingDate)
        : true
      var isExactAndInRange =
        exactMinBookingDays &&
        minBookingDays > 1 &&
        isHoveredDateAfterOrEqualMinDate &&
        isHoveredDateBeforeOrEqualMaxDate &&
        isPotentialEndDateAfterOrEqualMinDate &&
        isPotentialEndDateBeforeOrEqualMaxDate
      // Is date in range
      var isInRange =
        startDate &&
        !endDate &&
        !exactMinBookingDays &&
        isHoveredDateAfterOrEqualMinDate &&
        isHoveredDateBeforeOrEqualMaxDate
      // Is start date hovered and in range
      var isMinBookingDaysInRange =
        minBookingDays > 1 && startDate
          ? isWithinRange(date, {start: startDate, end: addDays(startDate, minBookingDays - 2)})
          : true
      var isStartDateHoveredAndInRange =
        startDate && isSameDay(date, startDate) && isMinBookingDaysInRange
      if (isNotBlocked && (isExactAndInRange || isInRange || isStartDateHoveredAndInRange)) {
        setHoveredDate(date)
      } else if (hoveredDate !== null) {
        setHoveredDate(null)
      }
    }
  }
  function goToPreviousMonths() {
    setActiveMonths(getNextActiveMonth(activeMonths, numberOfMonths, -1))
    setFocusedDate(null)
  }
  function goToNextMonths() {
    setActiveMonths(getNextActiveMonth(activeMonths, numberOfMonths, 1))
    setFocusedDate(null)
  }
  function goToPreviousYear() {
    setActiveMonths(getNextActiveMonth(activeMonths, numberOfMonths, -(12 - numberOfMonths + 1)))
    setFocusedDate(null)
  }
  function goToNextYear() {
    setActiveMonths(getNextActiveMonth(activeMonths, numberOfMonths, 12 - numberOfMonths + 1))
    setFocusedDate(null)
  }
  return {
    firstDayOfWeek: firstDayOfWeek,
    activeMonths: activeMonths,
    isDateSelected: isDateSelected,
    isDateHovered: isDateHovered,
    isFirstOrLastSelectedDate: isFirstOrLastSelectedDate,
    isDateBlocked: isDateBlocked,
    numberOfMonths: numberOfMonths,
    isDateFocused: isDateFocused,
    focusedDate: focusedDate,
    hoveredDate: hoveredDate,
    onResetDates: onResetDates,
    onDateHover: onDateHover,
    onDateSelect: onDateSelect,
    onDateFocus: onDateFocus,
    goToPreviousMonths: goToPreviousMonths,
    goToNextMonths: goToNextMonths,
    goToPreviousYear: goToPreviousYear,
    goToNextYear: goToNextYear,
  }
}
//# sourceMappingURL=useDatepicker.js.map
