var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
import {advanceTo, clear} from 'jest-date-mock'
import {renderHook, act} from '@testing-library/react-hooks'
import {isEqual, format, isSameDay} from 'date-fns'
import {
  getCurrentYearMonthAndDate,
  getDateMonthAndYear,
  getInitialMonths,
  isDateSelected,
  isFirstOrLastSelectedDate,
  isDateBlocked,
  getInputValue,
  getNextActiveMonth,
  useDatepicker,
  canSelectRange,
  isDateHovered,
  START_DATE,
  END_DATE,
} from '.'
describe('useDatepicker', function() {
  test('should return initial values', function() {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      return useDatepicker({
        startDate: null,
        endDate: null,
        focusedInput: null,
        onDatesChange: jest.fn(),
      })
    }).result
    expect(result.current.numberOfMonths).toBe(2)
    expect(result.current.firstDayOfWeek).toBe(1)
    // Check active months
    expect(result.current.activeMonths[0].year).toBe(2019)
    expect(result.current.activeMonths[0].month).toBe(2)
    expect(result.current.activeMonths[1].year).toBe(2019)
    expect(result.current.activeMonths[1].month).toBe(3)
    // next 2 months
    act(function() {
      result.current.goToNextMonths()
    })
    expect(result.current.activeMonths[0].year).toBe(2019)
    expect(result.current.activeMonths[0].month).toBe(4)
    expect(result.current.activeMonths[1].year).toBe(2019)
    expect(result.current.activeMonths[1].month).toBe(5)
    // prev 2 months
    act(function() {
      result.current.goToPreviousMonths()
    })
    expect(result.current.activeMonths[0].year).toBe(2019)
    expect(result.current.activeMonths[0].month).toBe(2)
    expect(result.current.activeMonths[1].year).toBe(2019)
    expect(result.current.activeMonths[1].month).toBe(3)
    // next year
    act(function() {
      result.current.goToNextYear()
    })
    expect(result.current.activeMonths[0].year).toBe(2020)
    expect(result.current.activeMonths[0].month).toBe(2)
    expect(result.current.activeMonths[1].year).toBe(2020)
    expect(result.current.activeMonths[1].month).toBe(3)
    // next year
    act(function() {
      result.current.goToPreviousYear()
    })
    expect(result.current.activeMonths[0].year).toBe(2019)
    expect(result.current.activeMonths[0].month).toBe(2)
    expect(result.current.activeMonths[1].year).toBe(2019)
    expect(result.current.activeMonths[1].month).toBe(3)
    clear()
  })
  test('change years, numberOfMonts = 1', function() {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      return useDatepicker({
        startDate: null,
        endDate: null,
        focusedInput: null,
        onDatesChange: jest.fn(),
        numberOfMonths: 1,
      })
    }).result
    expect(result.current.numberOfMonths).toBe(1)
    expect(result.current.firstDayOfWeek).toBe(1)
    // Check active months
    expect(result.current.activeMonths[0].year).toBe(2019)
    expect(result.current.activeMonths[0].month).toBe(2)
    // next year
    act(function() {
      result.current.goToNextYear()
    })
    expect(result.current.activeMonths[0].year).toBe(2020)
    expect(result.current.activeMonths[0].month).toBe(2)
    // next year
    act(function() {
      result.current.goToPreviousYear()
    })
    expect(result.current.activeMonths[0].year).toBe(2019)
    expect(result.current.activeMonths[0].month).toBe(2)
    clear()
  })
  test('change years, numberOfMonts = 2', function() {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      return useDatepicker({
        startDate: null,
        endDate: null,
        focusedInput: null,
        onDatesChange: jest.fn(),
        numberOfMonths: 2,
      })
    }).result
    expect(result.current.numberOfMonths).toBe(2)
    expect(result.current.firstDayOfWeek).toBe(1)
    // Check active months
    expect(result.current.activeMonths[0].year).toBe(2019)
    expect(result.current.activeMonths[0].month).toBe(2)
    expect(result.current.activeMonths[1].year).toBe(2019)
    expect(result.current.activeMonths[1].month).toBe(3)
    // next year
    act(function() {
      result.current.goToNextYear()
    })
    expect(result.current.activeMonths[0].year).toBe(2020)
    expect(result.current.activeMonths[0].month).toBe(2)
    expect(result.current.activeMonths[1].year).toBe(2020)
    expect(result.current.activeMonths[1].month).toBe(3)
    // next year
    act(function() {
      result.current.goToPreviousYear()
    })
    expect(result.current.activeMonths[0].year).toBe(2019)
    expect(result.current.activeMonths[0].month).toBe(2)
    expect(result.current.activeMonths[1].year).toBe(2019)
    expect(result.current.activeMonths[1].month).toBe(3)
    clear()
  })
  test('change years, numberOfMonts = 3', function() {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      return useDatepicker({
        startDate: null,
        endDate: null,
        focusedInput: null,
        onDatesChange: jest.fn(),
        numberOfMonths: 3,
      })
    }).result
    expect(result.current.numberOfMonths).toBe(3)
    expect(result.current.firstDayOfWeek).toBe(1)
    // Check active months
    expect(result.current.activeMonths[0].year).toBe(2019)
    expect(result.current.activeMonths[0].month).toBe(2)
    expect(result.current.activeMonths[1].year).toBe(2019)
    expect(result.current.activeMonths[1].month).toBe(3)
    expect(result.current.activeMonths[2].year).toBe(2019)
    expect(result.current.activeMonths[2].month).toBe(4)
    // next year
    act(function() {
      result.current.goToNextYear()
    })
    expect(result.current.activeMonths[0].year).toBe(2020)
    expect(result.current.activeMonths[0].month).toBe(2)
    expect(result.current.activeMonths[1].year).toBe(2020)
    expect(result.current.activeMonths[1].month).toBe(3)
    expect(result.current.activeMonths[2].year).toBe(2020)
    expect(result.current.activeMonths[2].month).toBe(4)
    // next year
    act(function() {
      result.current.goToPreviousYear()
    })
    expect(result.current.activeMonths[0].year).toBe(2019)
    expect(result.current.activeMonths[0].month).toBe(2)
    expect(result.current.activeMonths[1].year).toBe(2019)
    expect(result.current.activeMonths[1].month).toBe(3)
    expect(result.current.activeMonths[2].year).toBe(2019)
    expect(result.current.activeMonths[2].month).toBe(4)
    clear()
  })
  test('should set focus state', function() {
    var date = new Date(2019, 2, 27, 0, 0, 0)
    advanceTo(date)
    var result = renderHook(function() {
      return useDatepicker({
        startDate: null,
        endDate: null,
        focusedInput: null,
        onDatesChange: jest.fn(),
      })
    }).result
    expect(result.current.isDateFocused(date)).toBe(false)
    act(function() {
      result.current.onDateFocus(date)
    })
    expect(result.current.isDateFocused(date)).toBe(true)
    act(function() {
      result.current.onDateFocus(new Date(2019, 5, 27, 0, 0, 0))
    })
    expect(result.current.isDateFocused(new Date(2019, 5, 27, 0, 0, 0))).toBe(true)
    clear()
  })
  test('should have one month', function() {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      return useDatepicker({
        startDate: null,
        endDate: null,
        focusedInput: null,
        onDatesChange: jest.fn(),
        numberOfMonths: 1,
        firstDayOfWeek: 0,
      })
    }).result
    expect(result.current.numberOfMonths).toBe(1)
    expect(result.current.firstDayOfWeek).toBe(0)
    // Check active months
    expect(result.current.activeMonths[0].year).toBe(2019)
    expect(result.current.activeMonths[0].month).toBe(2)
    // next month
    act(function() {
      result.current.goToNextMonths()
    })
    expect(result.current.activeMonths[0].year).toBe(2019)
    expect(result.current.activeMonths[0].month).toBe(3)
    // prev month
    act(function() {
      result.current.goToPreviousMonths()
    })
    expect(result.current.activeMonths[0].year).toBe(2019)
    expect(result.current.activeMonths[0].month).toBe(2)
    clear()
  })
  test('should reset date', function() {
    var onDatesChange = jest.fn()
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      return useDatepicker({
        startDate: new Date(2019, 2, 27, 0, 0, 0),
        endDate: new Date(2019, 3, 27, 0, 0, 0),
        focusedInput: null,
        onDatesChange: onDatesChange,
      })
    }).result
    act(function() {
      result.current.onResetDates()
    })
    expect(onDatesChange).toBeCalledWith({
      startDate: null,
      endDate: null,
      focusedInput: START_DATE,
    })
    clear()
  })
  test('should select start date', function() {
    var onDatesChange = jest.fn()
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      return useDatepicker({
        startDate: null,
        endDate: null,
        focusedInput: START_DATE,
        onDatesChange: onDatesChange,
      })
    }).result
    act(function() {
      result.current.onDateSelect(new Date(2019, 3, 1, 0, 0, 0))
    })
    expect(onDatesChange).toBeCalledWith({
      startDate: new Date(2019, 3, 1, 0, 0, 0),
      endDate: null,
      focusedInput: END_DATE,
    })
    clear()
  })
  test('should select end date', function() {
    var onDatesChange = jest.fn()
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      return useDatepicker({
        startDate: new Date(2019, 3, 1, 0, 0, 0),
        endDate: null,
        focusedInput: END_DATE,
        onDatesChange: onDatesChange,
      })
    }).result
    act(function() {
      result.current.onDateSelect(new Date(2019, 3, 2, 0, 0, 0))
    })
    expect(onDatesChange).toBeCalledWith({
      startDate: new Date(2019, 3, 1, 0, 0, 0),
      endDate: new Date(2019, 3, 2, 0, 0, 0),
      focusedInput: null,
    })
    clear()
  })
  test('should select start date (reset date, because end date was before start date)', function() {
    var onDatesChange = jest.fn()
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      return useDatepicker({
        startDate: new Date(2019, 3, 1, 0, 0, 0),
        endDate: new Date(2019, 3, 2, 0, 0, 0),
        focusedInput: END_DATE,
        onDatesChange: onDatesChange,
      })
    }).result
    act(function() {
      result.current.onDateSelect(new Date(2019, 2, 27, 0, 0, 0))
    })
    expect(onDatesChange).toBeCalledWith({
      startDate: new Date(2019, 2, 27, 0, 0, 0),
      endDate: null,
      focusedInput: END_DATE,
    })
    clear()
  })
  test('should select start date (reset date, because start date was after end date)', function() {
    var onDatesChange = jest.fn()
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      return useDatepicker({
        startDate: new Date(2019, 3, 1, 0, 0, 0),
        endDate: new Date(2019, 3, 2, 0, 0, 0),
        focusedInput: START_DATE,
        onDatesChange: onDatesChange,
      })
    }).result
    act(function() {
      result.current.onDateSelect(new Date(2019, 3, 27, 0, 0, 0))
    })
    expect(onDatesChange).toBeCalledWith({
      startDate: new Date(2019, 3, 27, 0, 0, 0),
      endDate: null,
      focusedInput: END_DATE,
    })
    clear()
  })
  test('should check if date is blocked', function() {
    var onDatesChange = jest.fn()
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      return useDatepicker({
        startDate: new Date(2019, 3, 1, 0, 0, 0),
        endDate: new Date(2019, 3, 2, 0, 0, 0),
        minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
        maxBookingDate: new Date(2019, 3, 10, 0, 0, 0),
        focusedInput: START_DATE,
        onDatesChange: onDatesChange,
      })
    }).result
    expect(result.current.isDateBlocked(new Date(2019, 3, 1, 0, 0, 0))).toBe(false)
    expect(result.current.isDateBlocked(new Date(2019, 3, 10, 0, 0, 0))).toBe(false)
    expect(result.current.isDateBlocked(new Date(2019, 3, 11, 0, 0, 0))).toBe(true)
    expect(result.current.isDateBlocked(new Date(2019, 2, 27, 0, 0, 0))).toBe(true)
    clear()
  })
  test('should check if date is selected', function() {
    var onDatesChange = jest.fn()
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      return useDatepicker({
        startDate: new Date(2019, 3, 1, 0, 0, 0),
        endDate: new Date(2019, 3, 3, 0, 0, 0),
        minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
        maxBookingDate: new Date(2019, 3, 10, 0, 0, 0),
        focusedInput: START_DATE,
        onDatesChange: onDatesChange,
      })
    }).result
    expect(result.current.isDateSelected(new Date(2019, 3, 1, 0, 0, 0))).toBe(true)
    expect(result.current.isDateSelected(new Date(2019, 3, 2, 0, 0, 0))).toBe(true)
    expect(result.current.isDateSelected(new Date(2019, 3, 3, 0, 0, 0))).toBe(true)
    expect(result.current.isDateSelected(new Date(2019, 3, 11, 0, 0, 0))).toBe(false)
    expect(result.current.isDateSelected(new Date(2019, 2, 27, 0, 0, 0))).toBe(false)
    clear()
  })
  test('should check if date is first or last selected date', function() {
    var onDatesChange = jest.fn()
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      return useDatepicker({
        startDate: new Date(2019, 3, 1, 0, 0, 0),
        endDate: new Date(2019, 3, 3, 0, 0, 0),
        minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
        maxBookingDate: new Date(2019, 3, 10, 0, 0, 0),
        focusedInput: START_DATE,
        onDatesChange: onDatesChange,
      })
    }).result
    expect(result.current.isFirstOrLastSelectedDate(new Date(2019, 3, 1, 0, 0, 0))).toBe(true)
    expect(result.current.isFirstOrLastSelectedDate(new Date(2019, 3, 2, 0, 0, 0))).toBe(false)
    expect(result.current.isFirstOrLastSelectedDate(new Date(2019, 3, 3, 0, 0, 0))).toBe(true)
    expect(result.current.isFirstOrLastSelectedDate(new Date(2019, 3, 11, 0, 0, 0))).toBe(false)
    expect(result.current.isFirstOrLastSelectedDate(new Date(2019, 2, 27, 0, 0, 0))).toBe(false)
    clear()
  })
  test.each([
    {
      startDate: null,
      endDate: null,
      minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
      maxBookingDate: new Date(2019, 3, 28, 0, 0, 0),
      focusedInput: START_DATE,
      minBookingDays: 3,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 3, 5, 0, 0, 0))
      },
    },
    {
      startDate: new Date(2019, 3, 4, 0, 0, 0),
      endDate: null,
      minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
      maxBookingDate: new Date(2019, 3, 28, 0, 0, 0),
      focusedInput: START_DATE,
      minBookingDays: 1,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 3, 4, 0, 0, 0))
      },
    },
  ])('should not select the start date, because includes block date', function(props) {
    var onDatesChange = jest.fn()
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      // @ts-ignore
      return useDatepicker(__assign({}, props, {onDatesChange: onDatesChange}))
    }).result
    act(function() {
      result.current.onDateSelect(new Date(2019, 3, 4, 0, 0, 0))
    })
    expect(onDatesChange).not.toBeCalled()
    clear()
  })
  test.each([
    {
      startDate: null,
      endDate: null,
      minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
      maxBookingDate: new Date(2019, 3, 28, 0, 0, 0),
      focusedInput: START_DATE,
      minBookingDays: 3,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 3, 5, 0, 0, 0))
      },
      callbackDate: new Date(2019, 3, 1, 0, 0, 0),
      expectedHoveredDate: new Date(2019, 3, 1, 0, 0, 0),
      exactMinBookingDays: false,
      expected: false,
    },
    {
      startDate: new Date(2019, 3, 2, 0, 0, 0),
      endDate: null,
      minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
      maxBookingDate: new Date(2019, 3, 28, 0, 0, 0),
      focusedInput: START_DATE,
      minBookingDays: 3,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 3, 5, 0, 0, 0))
      },
      callbackDate: new Date(2019, 3, 4, 0, 0, 0),
      expectedHoveredDate: new Date(2019, 3, 3, 0, 0, 0),
      exactMinBookingDays: false,
      expected: true,
    },
    {
      startDate: new Date(2019, 3, 2, 0, 0, 0),
      endDate: new Date(2019, 3, 4, 0, 0, 0),
      minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
      maxBookingDate: new Date(2019, 3, 28, 0, 0, 0),
      focusedInput: START_DATE,
      minBookingDays: 3,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 3, 5, 0, 0, 0))
      },
      callbackDate: new Date(2019, 3, 4, 0, 0, 0),
      expectedHoveredDate: new Date(2019, 3, 3, 0, 0, 0),
      exactMinBookingDays: false,
      expected: false,
    },
    {
      startDate: new Date(2019, 3, 2, 0, 0, 0),
      endDate: null,
      minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
      maxBookingDate: new Date(2019, 3, 28, 0, 0, 0),
      focusedInput: START_DATE,
      minBookingDays: 3,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 3, 5, 0, 0, 0))
      },
      callbackDate: new Date(2019, 3, 3, 0, 0, 0),
      expectedHoveredDate: new Date(2019, 3, 3, 0, 0, 0),
      exactMinBookingDays: false,
      expected: false,
    },
    {
      startDate: new Date(2019, 3, 2, 0, 0, 0),
      endDate: null,
      minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
      maxBookingDate: new Date(2019, 3, 28, 0, 0, 0),
      focusedInput: START_DATE,
      minBookingDays: 3,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 3, 5, 0, 0, 0))
      },
      callbackDate: new Date(2019, 3, 6, 0, 0, 0),
      expectedHoveredDate: new Date(2019, 6, 3, 0, 0, 0),
      exactMinBookingDays: false,
      expected: false,
    },
    {
      startDate: new Date(2019, 3, 2, 0, 0, 0),
      endDate: null,
      minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
      maxBookingDate: new Date(2019, 3, 28, 0, 0, 0),
      focusedInput: START_DATE,
      minBookingDays: 3,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 3, 5, 0, 0, 0))
      },
      callbackDate: new Date(2019, 3, 4, 0, 0, 0),
      expectedHoveredDate: new Date(2019, 3, 4, 0, 0, 0),
      exactMinBookingDays: false,
      expected: true,
    },
    {
      startDate: new Date(2019, 3, 2, 0, 0, 0),
      endDate: null,
      minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
      maxBookingDate: new Date(2019, 3, 28, 0, 0, 0),
      focusedInput: START_DATE,
      minBookingDays: 3,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 3, 5, 0, 0, 0))
      },
      callbackDate: new Date(2019, 4, 4, 0, 0, 0),
      expectedHoveredDate: new Date(2019, 3, 4, 0, 0, 0),
      exactMinBookingDays: false,
      expected: false,
    },
    {
      startDate: new Date(2019, 3, 2, 0, 0, 0),
      endDate: null,
      minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
      maxBookingDate: new Date(2019, 3, 28, 0, 0, 0),
      focusedInput: START_DATE,
      minBookingDays: 3,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 3, 6, 0, 0, 0))
      },
      callbackDate: new Date(2019, 3, 2, 0, 0, 0),
      expectedHoveredDate: new Date(2019, 3, 2, 0, 0, 0),
      exactMinBookingDays: false,
      expected: true,
    },
    {
      startDate: null,
      endDate: null,
      minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
      maxBookingDate: new Date(2019, 3, 28, 0, 0, 0),
      focusedInput: START_DATE,
      minBookingDays: 3,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 3, 5, 0, 0, 0))
      },
      callbackDate: new Date(2019, 3, 4, 0, 0, 0),
      expectedHoveredDate: new Date(2019, 3, 4, 0, 0, 0),
      exactMinBookingDays: true,
      expected: false,
    },
    {
      startDate: null,
      endDate: null,
      minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
      maxBookingDate: new Date(2019, 3, 28, 0, 0, 0),
      focusedInput: START_DATE,
      minBookingDays: 3,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 3, 7, 0, 0, 0))
      },
      callbackDate: new Date(2019, 3, 4, 0, 0, 0),
      expectedHoveredDate: new Date(2019, 3, 4, 0, 0, 0),
      exactMinBookingDays: true,
      expected: true,
    },
    {
      startDate: null,
      endDate: null,
      minBookingDate: null,
      maxBookingDate: null,
      focusedInput: START_DATE,
      minBookingDays: 3,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 3, 7, 0, 0, 0))
      },
      callbackDate: new Date(2019, 3, 4, 0, 0, 0),
      expectedHoveredDate: new Date(2019, 3, 4, 0, 0, 0),
      exactMinBookingDays: true,
      expected: true,
    },
    {
      startDate: null,
      endDate: null,
      minBookingDate: null,
      maxBookingDate: null,
      focusedInput: START_DATE,
      minBookingDays: 3,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 3, 7, 0, 0, 0))
      },
      callbackDate: null,
      expectedHoveredDate: null,
      exactMinBookingDays: true,
      expected: false,
    },
  ])('should hover date', function(props) {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      // @ts-ignore
      return useDatepicker(__assign({}, props, {onDatesChange: jest.fn()}))
    }).result
    act(function() {
      result.current.onDateHover(props.callbackDate)
    })
    expect(result.current.isDateHovered(props.expectedHoveredDate)).toBe(props.expected)
    clear()
  })
  test('should reset hovered state', function() {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      // @ts-ignore
      return useDatepicker({
        startDate: new Date(2019, 3, 1, 0, 0, 0),
        endDate: null,
        focusedInput: START_DATE,
        minBookingDays: 2,
        minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
        maxBookingDate: new Date(2019, 3, 28, 0, 0, 0),
        onDatesChange: jest.fn(),
      })
    }).result
    act(function() {
      result.current.onDateHover(new Date(2019, 3, 4, 0, 0, 0))
    })
    expect(result.current.isDateHovered(new Date(2019, 3, 4, 0, 0, 0))).toBe(true)
    act(function() {
      result.current.onDateHover(new Date(2019, 2, 4, 0, 0, 0))
    })
    expect(result.current.isDateHovered(new Date(2019, 2, 4, 0, 0, 0))).toBe(false)
    clear()
  })
  test('should select start date and reset end date (blocked day)', function() {
    var onDatesChange = jest.fn()
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      return useDatepicker({
        startDate: new Date(2019, 3, 5, 0, 0, 0),
        endDate: new Date(2019, 3, 8, 0, 0, 0),
        focusedInput: START_DATE,
        onDatesChange: onDatesChange,
        isDateBlocked: function(date) {
          return isSameDay(date, new Date(2019, 3, 4, 0, 0, 0))
        },
      })
    }).result
    act(function() {
      result.current.onDateSelect(new Date(2019, 3, 1, 0, 0, 0))
    })
    expect(onDatesChange).toBeCalledWith({
      startDate: new Date(2019, 3, 1, 0, 0, 0),
      endDate: null,
      focusedInput: END_DATE,
    })
    clear()
  })
  test.each([
    {
      blockedDate: new Date(2019, 3, 4, 0, 0, 0),
      minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
      maxBookingDate: new Date(2019, 3, 30, 0, 0, 0),
      selectedDate: new Date(2019, 3, 1, 0, 0, 0),
      expectedStartDate: new Date(2019, 3, 1, 0, 0, 0),
      expectedEndDate: new Date(2019, 3, 3, 0, 0, 0),
    },
    {
      blockedDate: new Date(2019, 3, 4, 0, 0, 0),
      minBookingDate: undefined,
      maxBookingDate: undefined,
      selectedDate: new Date(2019, 3, 1, 0, 0, 0),
      expectedStartDate: new Date(2019, 3, 1, 0, 0, 0),
      expectedEndDate: new Date(2019, 3, 3, 0, 0, 0),
    },
    {
      blockedDate: new Date(2019, 3, 4, 0, 0, 0),
      minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
      maxBookingDate: new Date(2019, 3, 30, 0, 0, 0),
      selectedDate: new Date(2019, 3, 8, 0, 0, 0),
      expectedStartDate: new Date(2019, 3, 8, 0, 0, 0),
      expectedEndDate: new Date(2019, 3, 10, 0, 0, 0),
    },
    {
      blockedDate: new Date(2019, 3, 4, 0, 0, 0),
      minBookingDate: undefined,
      maxBookingDate: undefined,
      selectedDate: new Date(2019, 3, 8, 0, 0, 0),
      expectedStartDate: new Date(2019, 3, 8, 0, 0, 0),
      expectedEndDate: new Date(2019, 3, 10, 0, 0, 0),
    },
  ])('should execute onDateSelect callback with exact range selected (minBookingDays)', function(
    _a,
  ) {
    var blockedDate = _a.blockedDate,
      minBookingDate = _a.minBookingDate,
      maxBookingDate = _a.maxBookingDate,
      selectedDate = _a.selectedDate,
      expectedStartDate = _a.expectedStartDate,
      expectedEndDate = _a.expectedEndDate
    var onDatesChange = jest.fn()
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      return useDatepicker({
        minBookingDate: minBookingDate,
        maxBookingDate: maxBookingDate,
        startDate: null,
        endDate: null,
        minBookingDays: 3,
        exactMinBookingDays: true,
        focusedInput: START_DATE,
        onDatesChange: onDatesChange,
        isDateBlocked: function(date) {
          return isSameDay(date, blockedDate)
        },
      })
    }).result
    act(function() {
      result.current.onDateSelect(selectedDate)
    })
    expect(onDatesChange).toBeCalledWith({
      startDate: expectedStartDate,
      endDate: expectedEndDate,
      focusedInput: null,
    })
    clear()
  })
  test.each([
    {
      blockedDate: new Date(2019, 3, 4, 0, 0, 0),
      minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
      maxBookingDate: new Date(2019, 3, 10, 0, 0, 0),
      selectedDate: new Date(2019, 3, 2, 0, 0, 0),
    },
    {
      blockedDate: new Date(2019, 3, 4, 0, 0, 0),
      minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
      maxBookingDate: new Date(2019, 3, 10, 0, 0, 0),
      selectedDate: new Date(2019, 3, 9, 0, 0, 0),
    },
    {
      blockedDate: new Date(2019, 3, 4, 0, 0, 0),
      minBookingDate: new Date(2019, 3, 1, 0, 0, 0),
      maxBookingDate: new Date(2019, 3, 10, 0, 0, 0),
      selectedDate: new Date(2019, 2, 9, 0, 0, 0),
    },
  ])('should not select exact range (minBookingDays)', function(_a) {
    var blockedDate = _a.blockedDate,
      minBookingDate = _a.minBookingDate,
      maxBookingDate = _a.maxBookingDate,
      selectedDate = _a.selectedDate
    var onDatesChange = jest.fn()
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var result = renderHook(function() {
      return useDatepicker({
        minBookingDate: minBookingDate,
        maxBookingDate: maxBookingDate,
        startDate: null,
        endDate: null,
        minBookingDays: 3,
        exactMinBookingDays: true,
        focusedInput: START_DATE,
        onDatesChange: onDatesChange,
        isDateBlocked: function(date) {
          return isSameDay(date, blockedDate)
        },
      })
    }).result
    act(function() {
      result.current.onDateSelect(selectedDate)
    })
    expect(onDatesChange).not.toBeCalled()
    clear()
  })
})
describe('getCurrentYearMonthAndDate', function() {
  test('should return current year and month', function() {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    expect(getCurrentYearMonthAndDate().year).toEqual(2019)
    expect(getCurrentYearMonthAndDate().month).toEqual(2)
    clear()
  })
})
describe('getDateMonthAndYear', function() {
  test('should return year and month', function() {
    var date = new Date(2019, 2, 27, 0, 0, 0)
    expect(getDateMonthAndYear(date).year).toEqual(2019)
    expect(getDateMonthAndYear(date).month).toEqual(2)
  })
})
describe('getNextActiveMonth', function() {
  test('get next 2 months', function() {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var months = getInitialMonths(2, null)
    var nextMonths = getNextActiveMonth(months, 2, 1)
    expect(nextMonths.length).toBe(2)
    expect(nextMonths[0].year).toEqual(2019)
    expect(nextMonths[0].month).toEqual(4)
    expect(nextMonths[1].year).toEqual(2019)
    expect(nextMonths[1].month).toEqual(5)
    clear()
  })
  test('get next year', function() {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var months = getInitialMonths(2, null)
    var nextMonths = getNextActiveMonth(months, 2, 11)
    expect(nextMonths.length).toBe(2)
    expect(nextMonths[0].year).toEqual(2020)
    expect(nextMonths[0].month).toEqual(2)
    expect(nextMonths[1].year).toEqual(2020)
    expect(nextMonths[1].month).toEqual(3)
    clear()
  })
  test('get past 2 months', function() {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var months = getInitialMonths(2, null)
    var nextMonths = getNextActiveMonth(months, 2, -1)
    expect(nextMonths.length).toBe(2)
    expect(nextMonths[0].year).toEqual(2019)
    expect(nextMonths[0].month).toEqual(0)
    expect(nextMonths[1].year).toEqual(2019)
    expect(nextMonths[1].month).toEqual(1)
    clear()
  })
  test('get past year', function() {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var months = getInitialMonths(2, null)
    var nextMonths = getNextActiveMonth(months, 2, -11)
    expect(nextMonths.length).toBe(2)
    expect(nextMonths[0].year).toEqual(2018)
    expect(nextMonths[0].month).toEqual(2)
    expect(nextMonths[1].year).toEqual(2018)
    expect(nextMonths[1].month).toEqual(3)
    clear()
  })
})
describe('getInitialMonths', function() {
  test('should return 2 months', function() {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var months = getInitialMonths(2, null)
    expect(months.length).toBe(2)
    expect(months[0].year).toEqual(2019)
    expect(months[0].month).toEqual(2)
    expect(months[1].year).toEqual(2019)
    expect(months[1].month).toEqual(3)
    clear()
  })
  test('should return 2 months (june and july)', function() {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var months = getInitialMonths(2, new Date(2019, 5, 25))
    expect(months.length).toBe(2)
    expect(months[0].year).toEqual(2019)
    expect(months[0].month).toEqual(5)
    expect(months[1].year).toEqual(2019)
    expect(months[1].month).toEqual(6)
    clear()
  })
  test('should return 1 month', function() {
    advanceTo(new Date(2019, 2, 27, 0, 0, 0))
    var months = getInitialMonths(1, null)
    expect(months.length).toBe(1)
    expect(months[0].year).toEqual(2019)
    expect(months[0].month).toEqual(2)
    clear()
  })
})
var startDate = new Date(2019, 2, 20, 0, 0, 0)
var endDate = new Date(2019, 2, 27, 0, 0, 0)
describe('isDateSelected', function() {
  test('should return true, because date is selected', function() {
    expect(isDateSelected(startDate, startDate, endDate)).toBe(true)
    expect(isDateSelected(endDate, startDate, endDate)).toBe(true)
    expect(isDateSelected(new Date(2019, 2, 26, 0, 0, 0), startDate, endDate)).toBe(true)
  })
  test('should return false, because date is not selected', function() {
    expect(isDateSelected(new Date(2019, 2, 19, 0, 0, 0), startDate, endDate)).toBe(false)
    expect(isDateSelected(new Date(2019, 2, 28, 0, 0, 0), startDate, endDate)).toBe(false)
    expect(isDateSelected(new Date(2019, 2, 28, 0, 0, 0), null, null)).toBe(false)
  })
})
describe('isFirstOrLastSelectedDate', function() {
  test('should be start or end date', function() {
    expect(isFirstOrLastSelectedDate(new Date(2019, 2, 20), startDate, endDate)).toBe(true)
    expect(isFirstOrLastSelectedDate(new Date(2019, 2, 27), startDate, endDate)).toBe(true)
  })
  test('should not be start or end date', function() {
    expect(isFirstOrLastSelectedDate(new Date(2019, 2, 21), startDate, endDate)).toBe(false)
  })
})
describe('isDateBlocked', function() {
  var minBookingDate = new Date(2019, 2, 10, 1, 0, 0)
  var maxBookingDate = new Date(2019, 2, 27, 1, 0, 0)
  var equalDate = new Date(2019, 2, 25, 0, 0, 0)
  test('should be blocked', function() {
    function isDateBlockedFn(date) {
      return isEqual(date, equalDate)
    }
    expect(
      isDateBlocked({
        startDate: null,
        endDate: null,
        date: new Date(2019, 2, 9, 0, 0, 0),
        minBookingDate: minBookingDate,
        maxBookingDate: maxBookingDate,
      }),
    ).toBe(true)
    expect(
      isDateBlocked({
        startDate: null,
        endDate: null,
        date: new Date(2019, 2, 28, 0, 0, 0),
        minBookingDate: minBookingDate,
        maxBookingDate: maxBookingDate,
      }),
    ).toBe(true)
    expect(
      isDateBlocked({
        startDate: null,
        endDate: null,
        date: new Date(2019, 2, 25, 0, 0, 0),
        minBookingDate: minBookingDate,
        maxBookingDate: maxBookingDate,
        isDateBlockedFn: isDateBlockedFn,
      }),
    ).toBe(true)
    expect(
      isDateBlocked({
        startDate: new Date(2019, 2, 20, 0, 0, 0),
        endDate: null,
        minBookingDays: 3,
        maxBookingDate: new Date(2019, 2, 26, 0, 0, 0),
        date: new Date(2019, 2, 21, 0, 0, 0),
        minBookingDate: minBookingDate,
      }),
    ).toBe(true)
    expect(
      isDateBlocked({
        startDate: new Date(2019, 2, 20, 0, 0, 0),
        endDate: null,
        minBookingDays: 2,
        maxBookingDate: new Date(2019, 2, 26, 0, 0, 0),
        date: new Date(2019, 2, 20, 0, 0, 0),
        minBookingDate: minBookingDate,
      }),
    ).toBe(true)
  })
  test('should not be blocked', function() {
    function isDateBlockedFn(date) {
      return isEqual(date, equalDate)
    }
    expect(
      isDateBlocked({
        startDate: null,
        endDate: null,
        date: new Date(2019, 2, 10, 0, 0, 0),
        minBookingDate: minBookingDate,
        maxBookingDate: maxBookingDate,
      }),
    ).toBe(false)
    expect(
      isDateBlocked({startDate: null, endDate: null, date: new Date(2019, 2, 10, 0, 0, 0)}),
    ).toBe(false)
    expect(
      isDateBlocked({
        startDate: null,
        endDate: null,
        date: new Date(2019, 2, 27, 0, 0, 0),
        minBookingDate: minBookingDate,
        maxBookingDate: maxBookingDate,
      }),
    ).toBe(false)
    expect(
      isDateBlocked({
        startDate: null,
        endDate: null,
        date: new Date(2019, 2, 26, 0, 0, 0),
        minBookingDate: minBookingDate,
        maxBookingDate: maxBookingDate,
        isDateBlockedFn: isDateBlockedFn,
      }),
    ).toBe(false)
    expect(
      isDateBlocked({
        startDate: null,
        endDate: null,
        minBookingDays: 2,
        maxBookingDate: new Date(2019, 2, 27, 0, 0, 0),
        date: new Date(2019, 2, 25, 0, 0, 0),
        minBookingDate: minBookingDate,
      }),
    ).toBe(false)
    expect(
      isDateBlocked({
        startDate: new Date(2019, 2, 20, 0, 0, 0),
        endDate: null,
        minBookingDays: 3,
        maxBookingDate: new Date(2019, 2, 26, 0, 0, 0),
        date: new Date(2019, 2, 22, 0, 0, 0),
        minBookingDate: minBookingDate,
      }),
    ).toBe(false)
    expect(
      isDateBlocked({
        startDate: new Date(2019, 2, 25, 0, 0, 0),
        endDate: null,
        minBookingDays: 2,
        maxBookingDate: new Date(2019, 2, 26, 0, 0, 0),
        date: new Date(2019, 2, 26, 0, 0, 0),
        minBookingDate: minBookingDate,
      }),
    ).toBe(false)
    expect(
      isDateBlocked({
        startDate: new Date(2019, 2, 20, 0, 0, 0),
        endDate: null,
        minBookingDays: 3,
        maxBookingDate: new Date(2019, 2, 26, 0, 0, 0),
        date: new Date(2019, 2, 22, 0, 0, 0),
        minBookingDate: minBookingDate,
      }),
    ).toBe(false)
  })
})
describe('getInputValue', function() {
  test('should return formatted value', function() {
    var date = new Date(2019, 2, 10, 0, 0, 0)
    expect(getInputValue(date, 'dd/MM/yyyy', 'default value')).toBe('10/03/2019')
    expect(
      getInputValue(
        date,
        function(date) {
          return format(date, 'yyyy')
        },
        'default value',
      ),
    ).toBe('2019')
  })
  test('should return default value', function() {
    expect(getInputValue(null, 'dd/MM/yyyy', 'default value')).toBe('default value')
  })
})
describe('canSelectRange', function() {
  test.each([
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: null,
      minBookingDays: 3,
      exactMinBookingDays: false,
      minBookingDate: undefined,
      maxBookingDate: undefined,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 11, 0, 0, 0))
      },
      expected: false,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: null,
      minBookingDays: 1,
      exactMinBookingDays: false,
      minBookingDate: undefined,
      maxBookingDate: undefined,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 11, 0, 0, 0))
      },
      expected: true,
    },
    {
      startDate: new Date(2019, 2, 11, 0, 0, 0),
      endDate: null,
      minBookingDays: 1,
      exactMinBookingDays: false,
      minBookingDate: undefined,
      maxBookingDate: undefined,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 11, 0, 0, 0))
      },
      expected: false,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: new Date(2019, 2, 12, 0, 0, 0),
      minBookingDays: 3,
      exactMinBookingDays: false,
      minBookingDate: undefined,
      maxBookingDate: undefined,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 13, 0, 0, 0))
      },
      expected: true,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: new Date(2019, 2, 12, 0, 0, 0),
      minBookingDays: 3,
      exactMinBookingDays: false,
      minBookingDate: undefined,
      maxBookingDate: undefined,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 12, 0, 0, 0))
      },
      expected: false,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: new Date(2019, 2, 11, 0, 0, 0),
      minBookingDays: 3,
      exactMinBookingDays: false,
      minBookingDate: undefined,
      maxBookingDate: undefined,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 12, 0, 0, 0))
      },
      expected: false,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: new Date(2019, 2, 12, 0, 0, 0),
      minBookingDays: 1,
      exactMinBookingDays: false,
      minBookingDate: undefined,
      maxBookingDate: undefined,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 13, 0, 0, 0))
      },
      expected: true,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: null,
      minBookingDays: 3,
      exactMinBookingDays: false,
      minBookingDate: undefined,
      maxBookingDate: undefined,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 13, 0, 0, 0))
      },
      expected: true,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: null,
      minBookingDays: 3,
      exactMinBookingDays: true,
      minBookingDate: undefined,
      maxBookingDate: undefined,
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 18, 0, 0, 0))
      },
      expected: true,
    },
  ])('returns true when we can select the range', function(_a) {
    var startDate = _a.startDate,
      endDate = _a.endDate,
      minBookingDays = _a.minBookingDays,
      isDateBlocked = _a.isDateBlocked,
      exactMinBookingDays = _a.exactMinBookingDays,
      minBookingDate = _a.minBookingDate,
      maxBookingDate = _a.maxBookingDate,
      expected = _a.expected
    expect(
      canSelectRange({
        startDate: startDate,
        endDate: endDate,
        minBookingDays: minBookingDays,
        exactMinBookingDays: exactMinBookingDays,
        minBookingDate: minBookingDate,
        maxBookingDate: maxBookingDate,
        isDateBlocked: isDateBlocked,
      }),
    ).toBe(expected)
  })
})
describe('isDateHovered', function() {
  test.each([
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: null,
      hoveredDate: null,
      date: new Date(2019, 2, 10, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 11, 0, 0, 0))
      },
      minBookingDays: 1,
      exactMinBookingDays: false,
      expected: false,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: new Date(2019, 2, 11, 0, 0, 0),
      hoveredDate: null,
      date: new Date(2019, 2, 10, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 11, 0, 0, 0))
      },
      minBookingDays: 1,
      exactMinBookingDays: false,
      expected: false,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: new Date(2019, 2, 11, 0, 0, 0),
      hoveredDate: null,
      date: new Date(2019, 2, 11, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 11, 0, 0, 0))
      },
      minBookingDays: 1,
      exactMinBookingDays: false,
      expected: false,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: new Date(2019, 2, 11, 0, 0, 0),
      hoveredDate: new Date(2019, 2, 11, 0, 0, 0),
      date: new Date(2019, 2, 11, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 11, 0, 0, 0))
      },
      minBookingDays: 1,
      exactMinBookingDays: false,
      expected: false,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: null,
      hoveredDate: new Date(2019, 2, 11, 0, 0, 0),
      date: new Date(2019, 2, 11, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 11, 0, 0, 0))
      },
      minBookingDays: 1,
      exactMinBookingDays: false,
      expected: false,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: null,
      hoveredDate: new Date(2019, 2, 12, 0, 0, 0),
      date: new Date(2019, 2, 12, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 13, 0, 0, 0))
      },
      minBookingDays: 1,
      exactMinBookingDays: false,
      expected: true,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: null,
      hoveredDate: new Date(2019, 1, 12, 0, 0, 0),
      date: new Date(2019, 1, 11, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 13, 0, 0, 0))
      },
      minBookingDays: 1,
      exactMinBookingDays: false,
      expected: false,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: null,
      hoveredDate: new Date(2019, 2, 13, 0, 0, 0),
      date: new Date(2019, 2, 11, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 12, 0, 0, 0))
      },
      minBookingDays: 1,
      exactMinBookingDays: false,
      expected: false,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: null,
      hoveredDate: new Date(2019, 2, 10, 0, 0, 0),
      date: new Date(2019, 2, 11, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 13, 0, 0, 0))
      },
      minBookingDays: 3,
      exactMinBookingDays: false,
      expected: true,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: null,
      hoveredDate: new Date(2019, 2, 10, 0, 0, 0),
      date: new Date(2019, 2, 12, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 13, 0, 0, 0))
      },
      minBookingDays: 3,
      exactMinBookingDays: false,
      expected: true,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: null,
      hoveredDate: new Date(2019, 2, 10, 0, 0, 0),
      date: new Date(2019, 2, 10, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 13, 0, 0, 0))
      },
      minBookingDays: 3,
      exactMinBookingDays: false,
      expected: true,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: null,
      hoveredDate: new Date(2019, 2, 10, 0, 0, 0),
      date: new Date(2019, 2, 10, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 11, 0, 0, 0))
      },
      minBookingDays: 3,
      exactMinBookingDays: false,
      expected: false,
    },
    {
      startDate: null,
      endDate: null,
      hoveredDate: new Date(2019, 2, 10, 0, 0, 0),
      date: new Date(2019, 2, 10, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 11, 0, 0, 0))
      },
      minBookingDays: 3,
      exactMinBookingDays: true,
      expected: false,
    },
    {
      startDate: null,
      endDate: null,
      hoveredDate: new Date(2019, 2, 10, 0, 0, 0),
      date: new Date(2019, 2, 10, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 14, 0, 0, 0))
      },
      minBookingDays: 3,
      exactMinBookingDays: true,
      expected: true,
    },
    {
      startDate: new Date(2019, 2, 10, 0, 0, 0),
      endDate: null,
      hoveredDate: new Date(2019, 2, 10, 0, 0, 0),
      date: new Date(2019, 2, 10, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 14, 0, 0, 0))
      },
      minBookingDays: 3,
      exactMinBookingDays: true,
      expected: true,
    },
    {
      startDate: null,
      endDate: null,
      hoveredDate: new Date(2019, 2, 10, 0, 0, 0),
      date: new Date(2019, 2, 11, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 14, 0, 0, 0))
      },
      minBookingDays: 3,
      exactMinBookingDays: true,
      expected: true,
    },
    {
      startDate: null,
      endDate: null,
      hoveredDate: new Date(2019, 2, 10, 0, 0, 0),
      date: new Date(2019, 2, 12, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 14, 0, 0, 0))
      },
      minBookingDays: 3,
      exactMinBookingDays: true,
      expected: true,
    },
    {
      startDate: null,
      endDate: null,
      hoveredDate: new Date(2019, 2, 10, 0, 0, 0),
      date: new Date(2019, 2, 13, 0, 0, 0),
      isDateBlocked: function(date) {
        return isSameDay(date, new Date(2019, 2, 14, 0, 0, 0))
      },
      minBookingDays: 3,
      exactMinBookingDays: true,
      expected: false,
    },
  ])('should return true if day can be hovered, otherwise we return false', function(_a) {
    var startDate = _a.startDate,
      endDate = _a.endDate,
      hoveredDate = _a.hoveredDate,
      isDateBlocked = _a.isDateBlocked,
      date = _a.date,
      expected = _a.expected,
      exactMinBookingDays = _a.exactMinBookingDays,
      minBookingDays = _a.minBookingDays
    expect(
      isDateHovered({
        startDate: startDate,
        endDate: endDate,
        hoveredDate: hoveredDate,
        date: date,
        isDateBlocked: isDateBlocked,
        exactMinBookingDays: exactMinBookingDays,
        minBookingDays: minBookingDays,
      }),
    ).toBe(expected)
  })
})
//# sourceMappingURL=useDatepicker.test.js.map
