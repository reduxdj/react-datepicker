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
import * as React from 'react'
import {advanceTo, clear} from 'jest-date-mock'
import {END_DATE, START_DATE} from '@datepicker-react/hooks'
import {render, fireEvent} from '../../testUtil'
import Datepicker from '.'
import {ThemeProvider} from 'styled-components'
beforeEach(function() {
  advanceTo(new Date(2019, 2, 27, 0, 0, 0))
})
afterEach(function() {
  clear()
})
test('should have empty start and end date and focused start date', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
        onFocusChange: onFocusChange,
        startDate: null,
        endDate: null,
        focusedInput: START_DATE,
        onDatesChange: onDatesChange,
      }),
    ),
    container = _a.container,
    getAllByText = _a.getAllByText,
    getByText = _a.getByText,
    getAllByTestId = _a.getAllByTestId,
    getByTestId = _a.getByTestId
  expect(container).toMatchSnapshot()
  expect(getAllByText('Select').length).toBe(2)
  expect(getByText('March 2019'))
  expect(getByText('April 2019'))
  // Click on close (fire default function
  fireEvent.click(getByTestId('DatepickerClose'))
  // Test if first day is monday
  // @ts-ignore
  expect(getAllByTestId('DayLabel')[0]).toHaveTextContent('Mo')
  // Click on March 16
  var selectedDay = getAllByTestId('Day')[15]
  // @ts-ignore
  expect(selectedDay).toHaveTextContent('16')
  fireEvent.click(selectedDay)
  expect(onDatesChange).toHaveBeenCalledWith({
    startDate: new Date(2019, 2, 16, 0, 0, 0),
    endDate: null,
    focusedInput: END_DATE,
  })
})
test('should render custom day', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
        onFocusChange: onFocusChange,
        startDate: null,
        endDate: null,
        focusedInput: START_DATE,
        onDatesChange: onDatesChange,
        onDayRender: function(date) {
          return React.createElement('div', null, date.toDateString())
        },
      }),
    ),
    container = _a.container,
    getAllByText = _a.getAllByText,
    getByText = _a.getByText,
    getAllByTestId = _a.getAllByTestId,
    getByTestId = _a.getByTestId
  expect(container).toMatchSnapshot()
  expect(getAllByText('Select').length).toBe(2)
  expect(getByText('March 2019'))
  expect(getByText('April 2019'))
  // Click on close (fire default function
  fireEvent.click(getByTestId('DatepickerClose'))
  // Test if first day is monday
  // @ts-ignore
  expect(getAllByTestId('DayLabel')[0]).toHaveTextContent('Mo')
  // Click on March 16
  var selectedDay = getAllByTestId('Day')[15]
  // @ts-ignore
  expect(selectedDay).toHaveTextContent('16')
  fireEvent.click(selectedDay)
  expect(onDatesChange).toHaveBeenCalledWith({
    startDate: new Date(2019, 2, 16, 0, 0, 0),
    endDate: null,
    focusedInput: END_DATE,
  })
})
test('should have empty start and end date and focused start date - placement = top', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
        onFocusChange: onFocusChange,
        startDate: null,
        endDate: null,
        focusedInput: START_DATE,
        onDatesChange: onDatesChange,
        placement: 'top',
      }),
    ),
    container = _a.container,
    getAllByText = _a.getAllByText,
    getByText = _a.getByText,
    getAllByTestId = _a.getAllByTestId,
    getByTestId = _a.getByTestId
  expect(container).toMatchSnapshot()
  expect(getAllByText('Select').length).toBe(2)
  expect(getByText('March 2019'))
  expect(getByText('April 2019'))
  // Click on close (fire default function
  fireEvent.click(getByTestId('DatepickerClose'))
  // Test if first day is monday
  // @ts-ignore
  expect(getAllByTestId('DayLabel')[0]).toHaveTextContent('Mo')
  // Click on March 16
  var selectedDay = getAllByTestId('Day')[15]
  // @ts-ignore
  expect(selectedDay).toHaveTextContent('16')
  fireEvent.click(selectedDay)
  expect(onDatesChange).toHaveBeenCalledWith({
    startDate: new Date(2019, 2, 16, 0, 0, 0),
    endDate: null,
    focusedInput: END_DATE,
  })
})
test('should have empty end date and focused end date', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
        onFocusChange: onFocusChange,
        firstDayOfWeek: 0,
        minBookingDate: new Date(2019, 1, 16, 0, 0, 0),
        maxBookingDate: new Date(2020, 1, 16, 0, 0, 0),
        startDate: new Date(2019, 2, 16, 0, 0, 0),
        endDate: null,
        focusedInput: END_DATE,
        onDatesChange: onDatesChange,
      }),
    ),
    container = _a.container,
    getAllByText = _a.getAllByText,
    getByText = _a.getByText,
    getAllByTestId = _a.getAllByTestId
  expect(container).toMatchSnapshot()
  expect(getByText('03/16/2019'))
  expect(getAllByText('Select').length).toBe(1)
  expect(getByText('March 2019'))
  expect(getByText('April 2019'))
  // Test if first day is sunday
  // @ts-ignore
  expect(getAllByTestId('DayLabel')[0]).toHaveTextContent('Su')
  // Click on March 19
  var selectedDay = getAllByTestId('Day')[18]
  // @ts-ignore
  expect(selectedDay).toHaveTextContent('19')
  fireEvent.click(selectedDay)
  expect(onDatesChange).toHaveBeenCalledWith({
    startDate: new Date(2019, 2, 16, 0, 0, 0),
    endDate: new Date(2019, 2, 19, 0, 0, 0),
    focusedInput: null,
  })
})
test('should render vertical variant', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var container = render(
    React.createElement(Datepicker, {
      onFocusChange: onFocusChange,
      minBookingDate: new Date(2019, 1, 16, 0, 0, 0),
      maxBookingDate: new Date(2020, 1, 16, 0, 0, 0),
      startDate: new Date(2019, 2, 16, 0, 0, 0),
      endDate: null,
      focusedInput: END_DATE,
      onDatesChange: onDatesChange,
      vertical: true,
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should render vertical, rtl variant', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var container = render(
    React.createElement(Datepicker, {
      onFocusChange: onFocusChange,
      minBookingDate: new Date(2019, 1, 16, 0, 0, 0),
      maxBookingDate: new Date(2020, 1, 16, 0, 0, 0),
      startDate: new Date(2019, 2, 16, 0, 0, 0),
      endDate: null,
      focusedInput: END_DATE,
      onDatesChange: onDatesChange,
      vertical: true,
      rtl: true,
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should render rtl variant', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var container = render(
    React.createElement(Datepicker, {
      onFocusChange: onFocusChange,
      minBookingDate: new Date(2019, 1, 16, 0, 0, 0),
      maxBookingDate: new Date(2020, 1, 16, 0, 0, 0),
      startDate: new Date(2019, 2, 16, 0, 0, 0),
      endDate: null,
      focusedInput: END_DATE,
      onDatesChange: onDatesChange,
      vertical: false,
      rtl: true,
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should render without reset dates, close and selected dates component', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var container = render(
    React.createElement(Datepicker, {
      onFocusChange: onFocusChange,
      minBookingDate: new Date(2019, 1, 16, 0, 0, 0),
      maxBookingDate: new Date(2020, 1, 16, 0, 0, 0),
      startDate: new Date(2019, 2, 16, 0, 0, 0),
      endDate: null,
      focusedInput: END_DATE,
      onDatesChange: onDatesChange,
      vertical: true,
      showClose: false,
      showResetDates: false,
      showSelectedDates: false,
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should execute onClose callback', function() {
  var onDatesChange = jest.fn()
  var onClose = jest.fn()
  var onFocusChange = jest.fn()
  var isDateBlocked = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
        firstDayOfWeek: 0,
        minBookingDays: 1,
        isDateBlocked: isDateBlocked,
        minBookingDate: new Date(2019, 1, 16, 0, 0, 0),
        maxBookingDate: new Date(2020, 1, 16, 0, 0, 0),
        startDate: new Date(2019, 2, 16, 0, 0, 0),
        endDate: null,
        focusedInput: END_DATE,
        onDatesChange: onDatesChange,
        onClose: onClose,
        onFocusChange: onFocusChange,
        displayFormat: 'dd.MM.yyyy',
        phrases: {
          datepickerStartDatePlaceholder: 'test',
          datepickerStartDateLabel: 'test',
          datepickerEndDateLabel: 'test',
          datepickerEndDatePlaceholder: 'test',
          resetDates: 'test',
          startDateAriaLabel: 'test',
          endDateAriaLabel: 'test',
          startDatePlaceholder: 'test',
          endDatePlaceholder: 'test',
          close: 'test',
        },
      }),
    ),
    getByTestId = _a.getByTestId,
    getByText = _a.getByText,
    getAllByTestId = _a.getAllByTestId
  // Get formatted date
  getByText('16.03.2019')
  fireEvent.click(getByTestId('DatepickerClose'))
  expect(onClose).toHaveBeenCalled()
  fireEvent.focus(getAllByTestId('DatepickerInput')[0])
  expect(onFocusChange).toHaveBeenCalledWith(START_DATE)
  fireEvent.focus(getAllByTestId('DatepickerInput')[1])
  expect(onFocusChange).toHaveBeenCalledWith(END_DATE)
  fireEvent.click(getByTestId('DatepickerClose'))
})
test('should not render calendar icons', function() {
  var onDatesChange = jest.fn()
  var onClose = jest.fn()
  var onFocusChange = jest.fn()
  var container = render(
    React.createElement(Datepicker, {
      firstDayOfWeek: 0,
      minBookingDate: new Date(2019, 1, 16, 0, 0, 0),
      maxBookingDate: new Date(2020, 1, 16, 0, 0, 0),
      startDate: new Date(2019, 2, 16, 0, 0, 0),
      endDate: null,
      showEndDateCalendarIcon: false,
      showStartDateCalendarIcon: false,
      focusedInput: END_DATE,
      onDatesChange: onDatesChange,
      onClose: onClose,
      onFocusChange: onFocusChange,
      displayFormat: 'dd.MM.yyyy',
      phrases: {
        datepickerStartDatePlaceholder: 'test',
        datepickerStartDateLabel: 'test',
        datepickerEndDateLabel: 'test',
        datepickerEndDatePlaceholder: 'test',
        resetDates: 'test',
        startDateAriaLabel: 'test',
        endDateAriaLabel: 'test',
        startDatePlaceholder: 'test',
        endDatePlaceholder: 'test',
        close: 'test',
      },
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should click on select end date', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
        startDate: null,
        endDate: null,
        onDatesChange: onDatesChange,
        onFocusChange: onFocusChange,
        focusedInput: null,
      }),
    ),
    container = _a.container,
    getAllByTestId = _a.getAllByTestId
  expect(container).toMatchSnapshot()
  fireEvent.focus(getAllByTestId('DatepickerInput')[1])
  expect(onFocusChange).toHaveBeenCalledWith(START_DATE)
})
// @ts-ignore
var App = function(_a) {
  var onDatesChange = _a.onDatesChange,
    onFocusChange = _a.onFocusChange
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Datepicker, {
      startDate: null,
      endDate: null,
      onDatesChange: onDatesChange,
      onFocusChange: onFocusChange,
      focusedInput: START_DATE,
    }),
    React.createElement('div', {'data-testid': 'outside'}),
  )
}
test('should handle click outside (close datepicker)', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var getByTestId = render(
    React.createElement(App, {onDatesChange: onDatesChange, onFocusChange: onFocusChange}),
  ).getByTestId
  fireEvent.click(getByTestId('outside'))
  expect(onFocusChange).toHaveBeenCalledWith(null)
})
test('should use dateRangeGridTemplateRows from theme', function() {
  var dateRangeInputTheme = {
    dateRangeGridTemplateColumns: '1px 2px 3px',
    dateRangeGridTemplateRows: '1fr 2fr 3fr',
  }
  var datepickerTheme = {
    datepickerSelectDateGridTemplateColumns: '4px 5px 6px',
    datepickerSelectDateGridTemplateRows: '4fr 5fr 6fr',
  }
  var theme = {
    reactDatepicker: __assign({}, dateRangeInputTheme, datepickerTheme),
  }
  var _a = render(
      React.createElement(
        ThemeProvider,
        {theme: theme},
        React.createElement(Datepicker, {
          startDate: null,
          endDate: null,
          focusedInput: START_DATE,
          onFocusChange: jest.fn(),
          onDatesChange: jest.fn(),
        }),
      ),
    ),
    container = _a.container,
    getByTestId = _a.getByTestId
  expect(container).toMatchSnapshot()
  var grid1 = getByTestId('DateRangeInputGrid')
  // @ts-ignore
  expect(grid1).toHaveStyleRule('grid-template-columns', '1px 2px 3px')
  // @ts-ignore
  expect(grid1).toHaveStyleRule('grid-template-columns', '1px 2px 3px')
  // @ts-ignore
  expect(grid1).toHaveStyleRule('grid-template-rows', '1fr 2fr 3fr')
  var grid2 = getByTestId('SelectedDatesGrid')
  // @ts-ignore
  expect(grid2).toHaveStyleRule('grid-template-columns', '4px 5px 6px')
  // @ts-ignore
  expect(grid2).toHaveStyleRule('grid-template-rows', '4fr 5fr 6fr')
})
test('should handle custom id for input fields', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
        onFocusChange: onFocusChange,
        startDate: null,
        endDate: null,
        focusedInput: START_DATE,
        onDatesChange: onDatesChange,
        startDateInputId: 'customStartDateId',
        endDateInputId: 'customEndDateId',
      }),
    ),
    container = _a.container,
    getAllByTestId = _a.getAllByTestId
  expect(container).toMatchSnapshot()
  expect(getAllByTestId('DatepickerInput')[0].id).toEqual('customStartDateId')
  expect(getAllByTestId('DatepickerInput')[1].id).toEqual('customEndDateId')
})
//# sourceMappingURL=DateRangeInput.test.js.map
