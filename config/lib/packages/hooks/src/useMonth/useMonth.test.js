import {renderHook} from '@testing-library/react-hooks'
import {format} from 'date-fns'
import {useMonth, getDays, getWeekdayLabels} from '.'
describe('getWeekdayLabels', function() {
  test('should return week days start with monday', function() {
    expect(getWeekdayLabels()).toEqual(['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'])
  })
  test('should return week days start with sunday', function() {
    expect(getWeekdayLabels({firstDayOfWeek: 0})).toEqual([
      'Su',
      'Mo',
      'Tu',
      'We',
      'Th',
      'Fr',
      'Sa',
    ])
  })
  test('should return week days start with saturday', function() {
    expect(getWeekdayLabels({firstDayOfWeek: 6})).toEqual([
      'Sa',
      'Su',
      'Mo',
      'Tu',
      'We',
      'Th',
      'Fr',
    ])
  })
})
describe('getDays', function() {
  test('should return days for april 2019', function() {
    var result = renderHook(function() {
      return getDays({year: 2019, month: 3})
    }).result
    expect(result.current.length).toBe(30)
    expect(typeof result.current[0]).toBe('object')
    // @ts-ignore
    expect(result.current[0].dayLabel).toBe('01')
    // @ts-ignore
    expect(result.current[result.current.length - 1].dayLabel).toBe('30')
  })
  test('should return days for april 2019 start with sunday', function() {
    var result = renderHook(function() {
      return getDays({year: 2019, month: 3, firstDayOfWeek: 0})
    }).result
    expect(result.current.length).toBe(31)
    expect(typeof result.current[0]).toBe('number')
    expect(typeof result.current[1]).toBe('object')
    // @ts-ignore
    expect(result.current[1].dayLabel).toBe('01')
    // @ts-ignore
    expect(result.current[result.current.length - 1].dayLabel).toBe('30')
  })
  test('should return days for march 2019', function() {
    var result = renderHook(function() {
      return getDays({year: 2019, month: 2})
    }).result
    expect(result.current.length).toBe(35)
    expect(typeof result.current[0]).toBe('number')
    expect(typeof result.current[3]).toBe('number')
    expect(typeof result.current[4]).toBe('object')
    // @ts-ignore
    expect(result.current[4].dayLabel).toBe('01')
    // @ts-ignore
    expect(result.current[result.current.length - 1].dayLabel).toBe('31')
  })
  test('should return days for september 2019', function() {
    var result = renderHook(function() {
      return getDays({year: 2019, month: 8})
    }).result
    expect(result.current.length).toBe(36)
    expect(typeof result.current[0]).toBe('number')
    expect(typeof result.current[5]).toBe('number')
    expect(typeof result.current[6]).toBe('object')
    // @ts-ignore
    expect(result.current[6].dayLabel).toBe('01')
    // @ts-ignore
    expect(result.current[result.current.length - 1].dayLabel).toBe('30')
  })
  test('should return days for march 2019 start with sunday', function() {
    var result = renderHook(function() {
      return getDays({year: 2019, month: 2, firstDayOfWeek: 0})
    }).result
    expect(result.current.length).toBe(36)
    expect(typeof result.current[0]).toBe('number')
    expect(typeof result.current[4]).toBe('number')
    expect(typeof result.current[5]).toBe('object')
    // @ts-ignore
    expect(result.current[5].dayLabel).toBe('01')
    // @ts-ignore
    expect(result.current[result.current.length - 1].dayLabel).toBe('31')
  })
  test('should return days for march 2019 start with saturday', function() {
    var result = renderHook(function() {
      return getDays({year: 2019, month: 2, firstDayOfWeek: 6})
    }).result
    expect(result.current.length).toBe(37)
    expect(typeof result.current[0]).toBe('number')
    expect(typeof result.current[5]).toBe('number')
    expect(typeof result.current[6]).toBe('object')
    // @ts-ignore
    expect(result.current[6].dayLabel).toBe('01')
    // @ts-ignore
    expect(result.current[result.current.length - 1].dayLabel).toBe('31')
  })
})
describe('useMonth', function() {
  test('should return days for april 2019', function() {
    var result = renderHook(function() {
      return useMonth({year: 2019, month: 3})
    }).result
    // Days
    expect(result.current.days.length).toBe(30)
    expect(typeof result.current.days[0]).toBe('object')
    // @ts-ignore
    expect(result.current.days[0].dayLabel).toBe('01')
    // @ts-ignore
    expect(result.current.days[result.current.days.length - 1].dayLabel).toBe('30')
    // Week days
    expect(result.current.weekdayLabels.length).toBe(7)
    expect(result.current.weekdayLabels[0]).toBe('Mo')
    expect(result.current.weekdayLabels[6]).toBe('Su')
    // Month Label
    expect(result.current.monthLabel).toBe('April 2019')
  })
  test('should return days for april 2019 start with sunday', function() {
    var result = renderHook(function() {
      return useMonth({year: 2019, month: 3, firstDayOfWeek: 0})
    }).result
    // Days
    expect(result.current.days.length).toBe(31)
    expect(typeof result.current.days[0]).toBe('number')
    expect(typeof result.current.days[1]).toBe('object')
    // @ts-ignore
    expect(result.current.days[1].dayLabel).toBe('01')
    // @ts-ignore
    expect(result.current.days[result.current.days.length - 1].dayLabel).toBe('30')
    // Week days
    expect(result.current.weekdayLabels.length).toBe(7)
    expect(result.current.weekdayLabels[0]).toBe('Su')
    expect(result.current.weekdayLabels[6]).toBe('Sa')
  })
  test('should return days for march 2019', function() {
    var result = renderHook(function() {
      return useMonth({year: 2019, month: 2})
    }).result
    // Days
    expect(result.current.days.length).toBe(35)
    expect(typeof result.current.days[0]).toBe('number')
    expect(typeof result.current.days[3]).toBe('number')
    expect(typeof result.current.days[4]).toBe('object')
    // @ts-ignore
    expect(result.current.days[4].dayLabel).toBe('01')
    // @ts-ignore
    expect(result.current.days[result.current.days.length - 1].dayLabel).toBe('31')
    // Week days
    expect(result.current.weekdayLabels.length).toBe(7)
    expect(result.current.weekdayLabels[0]).toBe('Mo')
    expect(result.current.weekdayLabels[6]).toBe('Su')
    // Month Label
    expect(result.current.monthLabel).toBe('March 2019')
  })
  test('should return days for march 2019 start with sunday', function() {
    var result = renderHook(function() {
      return useMonth({year: 2019, month: 2, firstDayOfWeek: 0})
    }).result
    // Days
    expect(result.current.days.length).toBe(36)
    expect(typeof result.current.days[0]).toBe('number')
    expect(typeof result.current.days[4]).toBe('number')
    expect(typeof result.current.days[5]).toBe('object')
    // @ts-ignore
    expect(result.current.days[5].dayLabel).toBe('01')
    // @ts-ignore
    expect(result.current.days[result.current.days.length - 1].dayLabel).toBe('31')
    // Week days
    expect(result.current.weekdayLabels.length).toBe(7)
    expect(result.current.weekdayLabels[0]).toBe('Su')
    expect(result.current.weekdayLabels[6]).toBe('Sa')
  })
  test('should return days for march 2019 start with saturday', function() {
    var result = renderHook(function() {
      return useMonth({year: 2019, month: 2, firstDayOfWeek: 6})
    }).result
    // Days
    expect(result.current.days.length).toBe(37)
    expect(typeof result.current.days[0]).toBe('number')
    expect(typeof result.current.days[5]).toBe('number')
    expect(typeof result.current.days[6]).toBe('object')
    // @ts-ignore
    expect(result.current.days[6].dayLabel).toBe('01')
    // @ts-ignore
    expect(result.current.days[result.current.days.length - 1].dayLabel).toBe('31')
    // Week days
    expect(result.current.weekdayLabels.length).toBe(7)
    expect(result.current.weekdayLabels[0]).toBe('Sa')
    expect(result.current.weekdayLabels[6]).toBe('Fr')
  })
  test('should return days for september 2019', function() {
    var result = renderHook(function() {
      return useMonth({year: 2019, month: 8})
    }).result
    // Days
    expect(result.current.days.length).toBe(36)
    expect(typeof result.current.days[0]).toBe('number')
    expect(typeof result.current.days[1]).toBe('number')
    expect(typeof result.current.days[2]).toBe('number')
    expect(typeof result.current.days[3]).toBe('number')
    expect(typeof result.current.days[4]).toBe('number')
    expect(typeof result.current.days[5]).toBe('number')
    // @ts-ignore
    expect(result.current.days[6].dayLabel).toBe('01')
    // @ts-ignore
    expect(result.current.days[result.current.days.length - 1].dayLabel).toBe('30')
    // Week days
    expect(result.current.weekdayLabels.length).toBe(7)
    expect(result.current.weekdayLabels[0]).toBe('Mo')
    expect(result.current.weekdayLabels[6]).toBe('Su')
    // Month Label
    expect(result.current.monthLabel).toBe('September 2019')
  })
  test('should return days for september 2019 start with wednesday', function() {
    var result = renderHook(function() {
      return useMonth({year: 2019, month: 8, firstDayOfWeek: 3})
    }).result
    // Days
    expect(result.current.days.length).toBe(34)
    expect(typeof result.current.days[0]).toBe('number')
    expect(typeof result.current.days[1]).toBe('number')
    expect(typeof result.current.days[2]).toBe('number')
    expect(typeof result.current.days[3]).toBe('number')
    // @ts-ignore
    expect(result.current.days[4].dayLabel).toBe('01')
    // @ts-ignore
    expect(result.current.days[result.current.days.length - 1].dayLabel).toBe('30')
    // Week days
    expect(result.current.weekdayLabels.length).toBe(7)
    expect(result.current.weekdayLabels[0]).toBe('We')
    expect(result.current.weekdayLabels[6]).toBe('Tu')
    // Month Label
    expect(result.current.monthLabel).toBe('September 2019')
  })
  test('should return days for october 2019 start with friday', function() {
    var result = renderHook(function() {
      return useMonth({year: 2019, month: 9, firstDayOfWeek: 5})
    }).result
    // Days
    expect(result.current.days.length).toBe(35)
    expect(typeof result.current.days[0]).toBe('number')
    expect(typeof result.current.days[1]).toBe('number')
    expect(typeof result.current.days[2]).toBe('number')
    expect(typeof result.current.days[3]).toBe('number')
    // @ts-ignore
    expect(result.current.days[4].dayLabel).toBe('01')
    // @ts-ignore
    expect(result.current.days[result.current.days.length - 1].dayLabel).toBe('31')
    // Week days
    expect(result.current.weekdayLabels.length).toBe(7)
    expect(result.current.weekdayLabels[0]).toBe('Fr')
    expect(result.current.weekdayLabels[6]).toBe('Th')
    // Month Label
    expect(result.current.monthLabel).toBe('October 2019')
  })
  test('should return right formats', function() {
    var result = renderHook(function() {
      return useMonth({
        year: 2019,
        month: 2,
        firstDayOfWeek: 6,
        dayLabelFormat: function(date) {
          return format(date, 'dd')
        },
        weekdayLabelFormat: function(date) {
          return format(date, 'iiiiii')
        },
        monthLabelFormat: function(date) {
          return format(date, 'MMMM yyyy')
        },
      })
    }).result
    // Days
    expect(result.current.days.length).toBe(37)
    expect(typeof result.current.days[0]).toBe('number')
    expect(typeof result.current.days[5]).toBe('number')
    expect(typeof result.current.days[6]).toBe('object')
    // @ts-ignore
    expect(result.current.days[6].dayLabel).toBe('01')
    // @ts-ignore
    expect(result.current.days[result.current.days.length - 1].dayLabel).toBe('31')
    // Week days
    expect(result.current.weekdayLabels.length).toBe(7)
    expect(result.current.weekdayLabels[0]).toBe('Sa')
    expect(result.current.weekdayLabels[6]).toBe('Fr')
  })
})
//# sourceMappingURL=useMonth.test.js.map
