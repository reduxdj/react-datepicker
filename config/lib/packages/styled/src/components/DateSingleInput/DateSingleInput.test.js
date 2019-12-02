import * as React from 'react'
import {advanceTo, clear} from 'jest-date-mock'
import {render, fireEvent} from '../../testUtil'
import Datepicker from '.'
beforeEach(function() {
  advanceTo(new Date(2019, 2, 27, 0, 0, 0))
})
afterEach(function() {
  clear()
})
test('should have empty empty date and opened datepicker', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
        showDatepicker: true,
        onFocusChange: onFocusChange,
        date: null,
        onDateChange: onDatesChange,
      }),
    ),
    container = _a.container,
    getByText = _a.getByText,
    getAllByTestId = _a.getAllByTestId,
    getByTestId = _a.getByTestId
  expect(container).toMatchSnapshot()
  expect(getByText('March 2019'))
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
    date: new Date(2019, 2, 16, 0, 0, 0),
    showDatepicker: false,
  })
})
test('should render custom day', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
        showDatepicker: true,
        onFocusChange: onFocusChange,
        date: null,
        onDateChange: onDatesChange,
        onDayRender: function(date) {
          return React.createElement('div', null, date.toDateString())
        },
      }),
    ),
    container = _a.container,
    getByText = _a.getByText,
    getAllByTestId = _a.getAllByTestId,
    getByTestId = _a.getByTestId
  expect(container).toMatchSnapshot()
  expect(getByText('March 2019'))
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
    date: new Date(2019, 2, 16, 0, 0, 0),
    showDatepicker: false,
  })
})
test('placement top', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var container = render(
    React.createElement(Datepicker, {
      showDatepicker: true,
      onFocusChange: onFocusChange,
      date: null,
      onDateChange: onDatesChange,
      placement: 'top',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should render vertical variant', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var container = render(
    React.createElement(Datepicker, {
      vertical: true,
      showDatepicker: true,
      onFocusChange: onFocusChange,
      date: null,
      onDateChange: onDatesChange,
      placement: 'top',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should render vertical, rtl, variant', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var container = render(
    React.createElement(Datepicker, {
      rtl: true,
      vertical: true,
      showDatepicker: true,
      onFocusChange: onFocusChange,
      date: null,
      onDateChange: onDatesChange,
      placement: 'top',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should render rtl, variant', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var container = render(
    React.createElement(Datepicker, {
      rtl: true,
      showDatepicker: true,
      onFocusChange: onFocusChange,
      date: null,
      onDateChange: onDatesChange,
      placement: 'top',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should render without calendar icon, reset dates and close component', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var container = render(
    React.createElement(Datepicker, {
      rtl: true,
      showDatepicker: true,
      onFocusChange: onFocusChange,
      date: null,
      onDateChange: onDatesChange,
      showCalendarIcon: false,
      showClose: false,
      showResetDate: false,
      placement: 'top',
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
        showDatepicker: true,
        firstDayOfWeek: 0,
        isDateBlocked: isDateBlocked,
        minBookingDate: new Date(2019, 1, 16, 0, 0, 0),
        maxBookingDate: new Date(2020, 1, 16, 0, 0, 0),
        date: new Date(2019, 2, 16, 0, 0, 0),
        onDateChange: onDatesChange,
        onClose: onClose,
        onFocusChange: onFocusChange,
        displayFormat: 'dd.MM.yyyy',
        phrases: {
          datepickerStartDatePlaceholder: 'test',
          datepickerStartDateLabel: 'test',
          datepickerEndDateLabel: 'test',
          datepickerEndDatePlaceholder: 'test',
          resetDates: 'test',
          dateAriaLabel: 'test',
          datePlaceholder: 'test',
          close: 'test',
        },
      }),
    ),
    getByTestId = _a.getByTestId,
    getAllByTestId = _a.getAllByTestId
  fireEvent.click(getByTestId('DatepickerClose'))
  expect(onClose).toHaveBeenCalled()
  fireEvent.focus(getAllByTestId('DatepickerInput')[0])
  expect(onFocusChange).toHaveBeenCalledWith(true)
  fireEvent.click(getByTestId('DatepickerClose'))
})
// @ts-ignore
var App = function(_a) {
  var onDateChange = _a.onDateChange,
    onFocusChange = _a.onFocusChange
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Datepicker, {
      showDatepicker: true,
      date: null,
      onDateChange: onDateChange,
      onFocusChange: onFocusChange,
    }),
    React.createElement('div', {'data-testid': 'outside'}),
  )
}
test('should handle click outside (close datepicker)', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var getByTestId = render(
    React.createElement(App, {onDateChange: onDatesChange, onFocusChange: onFocusChange}),
  ).getByTestId
  fireEvent.click(getByTestId('outside'))
  expect(onFocusChange).toHaveBeenCalledWith(false)
})
test('should handle custom id for input field', function() {
  var onDatesChange = jest.fn()
  var onFocusChange = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
        showDatepicker: true,
        onFocusChange: onFocusChange,
        date: null,
        onDateChange: onDatesChange,
        inputId: 'customId',
      }),
    ),
    container = _a.container,
    getByTestId = _a.getByTestId
  expect(container).toMatchSnapshot()
  expect(getByTestId('DatepickerInput').id).toEqual('customId')
})
//# sourceMappingURL=DateSingleInput.test.js.map
