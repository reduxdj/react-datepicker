import {useCallback, useEffect} from 'react'
import addDays from 'date-fns/addDays'
function useDay(_a) {
  var date = _a.date,
    focusedDate = _a.focusedDate,
    isDateSelected = _a.isDateSelected,
    isDateFocused = _a.isDateFocused,
    isFirstOrLastSelectedDate = _a.isFirstOrLastSelectedDate,
    isDateHovered = _a.isDateHovered,
    isDateBlocked = _a.isDateBlocked,
    onDateSelect = _a.onDateSelect,
    onDateFocus = _a.onDateFocus,
    onDateHover = _a.onDateHover,
    dayRef = _a.dayRef
  var onClick = useCallback(
    function() {
      return onDateSelect(date)
    },
    [date, onDateSelect],
  )
  var onMouseEnter = useCallback(
    function() {
      return onDateHover(date)
    },
    [date, onDateHover],
  )
  useEffect(
    function() {
      if (dayRef && dayRef.current && isDateFocused(date)) {
        dayRef.current.focus()
      }
    },
    [dayRef, date, isDateFocused],
  )
  var disabled = isDateBlocked(date) && !isDateHovered(date)
  return {
    tabIndex: focusedDate === null || isDateFocused(date) ? 0 : -1,
    isSelected: isDateSelected(date),
    isSelectedStartOrEnd: isFirstOrLastSelectedDate(date),
    isWithinHoverRange: isDateHovered(date),
    disabledDate: disabled,
    onKeyDown: function(e) {
      if (e.key === 'ArrowRight') {
        onDateFocus(addDays(date, 1))
      } else if (e.key === 'ArrowLeft') {
        onDateFocus(addDays(date, -1))
      } else if (e.key === 'ArrowUp') {
        onDateFocus(addDays(date, -7))
      } else if (e.key === 'ArrowDown') {
        onDateFocus(addDays(date, 7))
      }
    },
    onClick: disabled ? function() {} : onClick,
    onMouseEnter: onMouseEnter,
  }
}
export default useDay
//# sourceMappingURL=useDay.js.map
