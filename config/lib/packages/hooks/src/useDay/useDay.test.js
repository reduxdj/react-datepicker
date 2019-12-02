import {renderHook, act} from '@testing-library/react-hooks'
import useDay from '.'
var date = new Date(2019, 2, 1, 0, 0, 0)
var dayRef = {
  current: {
    focus: jest.fn(),
  },
}
test('should execute onClick callback', function() {
  var onDateSelect = jest.fn()
  var result = renderHook(function() {
    return useDay({
      date: date,
      // @ts-ignore
      dayRef: dayRef,
      onDateSelect: onDateSelect,
      focusedDate: null,
      isDateSelected: jest.fn(),
      isDateFocused: jest.fn(),
      isFirstOrLastSelectedDate: jest.fn(),
      isDateHovered: jest.fn(),
      isDateBlocked: jest.fn(),
      onDateFocus: jest.fn(),
      onDateHover: jest.fn(),
    })
  }).result
  act(function() {
    result.current.onClick()
  })
  expect(onDateSelect).toBeCalled()
})
test('should not execute onClick callback, because day is disabled', function() {
  var onDateSelect = jest.fn()
  var result = renderHook(function() {
    return useDay({
      date: date,
      // @ts-ignore
      dayRef: dayRef,
      onDateSelect: onDateSelect,
      focusedDate: null,
      isDateSelected: jest.fn(),
      isDateFocused: jest.fn(),
      isFirstOrLastSelectedDate: jest.fn(),
      isDateHovered: jest.fn(),
      isDateBlocked: function() {
        return true
      },
      onDateFocus: jest.fn(),
      onDateHover: jest.fn(),
    })
  }).result
  act(function() {
    result.current.onClick()
  })
  expect(result.current.disabledDate).toBe(true)
  expect(onDateSelect).not.toBeCalled()
})
test('should be active', function() {
  var result = renderHook(function() {
    return useDay({
      date: date,
      // @ts-ignore
      dayRef: dayRef,
      onDateSelect: jest.fn(),
      focusedDate: null,
      isDateSelected: function() {
        return true
      },
      isDateFocused: jest.fn(),
      isFirstOrLastSelectedDate: jest.fn(),
      isDateHovered: jest.fn(),
      isDateBlocked: jest.fn(),
      onDateFocus: jest.fn(),
      onDateHover: jest.fn(),
    })
  }).result
  expect(result.current.isSelected).toBe(true)
})
test('should be active first or last day', function() {
  var result = renderHook(function() {
    return useDay({
      date: date,
      // @ts-ignore
      dayRef: dayRef,
      onDateSelect: jest.fn(),
      focusedDate: null,
      isDateSelected: jest.fn(),
      isDateFocused: jest.fn(),
      isFirstOrLastSelectedDate: function() {
        return true
      },
      isDateHovered: jest.fn(),
      isDateBlocked: jest.fn(),
      onDateFocus: jest.fn(),
      onDateHover: jest.fn(),
    })
  }).result
  expect(result.current.isSelectedStartOrEnd).toBe(true)
})
test('should be within range', function() {
  var result = renderHook(function() {
    return useDay({
      date: date,
      // @ts-ignore
      dayRef: dayRef,
      onDateSelect: jest.fn(),
      focusedDate: null,
      isDateSelected: jest.fn(),
      isDateFocused: jest.fn(),
      isFirstOrLastSelectedDate: jest.fn(),
      isDateHovered: function() {
        return true
      },
      isDateBlocked: jest.fn(),
      onDateFocus: jest.fn(),
      onDateHover: jest.fn(),
    })
  }).result
  expect(result.current.isWithinHoverRange).toBe(true)
})
test('tabIndex should be 0', function() {
  var result = renderHook(function() {
    return useDay({
      date: date,
      // @ts-ignore
      dayRef: dayRef,
      onDateSelect: jest.fn(),
      focusedDate: null,
      isDateSelected: jest.fn(),
      isDateFocused: jest.fn(),
      isFirstOrLastSelectedDate: jest.fn(),
      isDateHovered: jest.fn(),
      isDateBlocked: jest.fn(),
      onDateFocus: jest.fn(),
      onDateHover: jest.fn(),
    })
  }).result
  expect(result.current.tabIndex).toBe(0)
})
test('should be unfocused', function() {
  var result = renderHook(function() {
    return useDay({
      date: date,
      // @ts-ignore
      dayRef: dayRef,
      onDateSelect: jest.fn(),
      focusedDate: date,
      isDateSelected: jest.fn(),
      isDateFocused: jest.fn(),
      isFirstOrLastSelectedDate: jest.fn(),
      isDateHovered: jest.fn(),
      isDateBlocked: jest.fn(),
      onDateFocus: jest.fn(),
      onDateHover: jest.fn(),
    })
  }).result
  expect(result.current.tabIndex).toBe(-1)
})
test('should be focused', function() {
  var result = renderHook(function() {
    return useDay({
      date: date,
      // @ts-ignore
      dayRef: dayRef,
      onDateSelect: jest.fn(),
      focusedDate: date,
      isDateSelected: jest.fn(),
      isDateFocused: function() {
        return true
      },
      isFirstOrLastSelectedDate: jest.fn(),
      isDateHovered: jest.fn(),
      isDateBlocked: jest.fn(),
      onDateFocus: jest.fn(),
      onDateHover: jest.fn(),
    })
  }).result
  expect(result.current.tabIndex).toBe(0)
})
//# sourceMappingURL=useDay.test.js.map
