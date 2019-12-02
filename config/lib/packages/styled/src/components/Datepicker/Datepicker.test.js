import {advanceTo, clear} from 'jest-date-mock'
import * as React from 'react'
import {render, fireEvent, act} from '@testing-library/react'
import {END_DATE, START_DATE} from '@datepicker-react/hooks'
import Datepicker from '.'
beforeEach(function() {
  advanceTo(new Date(2019, 2, 27, 0, 0, 0))
})
afterEach(function() {
  clear()
})
test('should have empty start and end date and focused start date', function() {
  var onDatesChange = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
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
test('should custom render day', function() {
  var onDatesChange = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
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
test('should select exact range', function() {
  var onDatesChange = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
        exactMinBookingDays: true,
        minBookingDays: 7,
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
    endDate: new Date(2019, 2, 22, 0, 0, 0),
    focusedInput: null,
  })
})
test('should hover exact range and move the mouse out of the MonthGrid', function() {
  var _a = render(
      React.createElement(Datepicker, {
        exactMinBookingDays: true,
        minBookingDays: 7,
        startDate: null,
        endDate: null,
        focusedInput: START_DATE,
        onDatesChange: jest.fn(),
      }),
    ),
    container = _a.container,
    getAllByText = _a.getAllByText,
    getAllByTestId = _a.getAllByTestId,
    getByTestId = _a.getByTestId
  expect(container).toMatchSnapshot()
  expect(getAllByText('Select').length).toBe(2)
  // Hover the March 16
  var hoveredDay = getAllByTestId('Day')[15]
  // @ts-ignore
  expect(hoveredDay).toHaveTextContent('16')
  fireEvent.mouseEnter(hoveredDay)
  expect(container).toMatchSnapshot()
  fireEvent.mouseLeave(getByTestId('MonthGrid'))
  expect(container).toMatchSnapshot()
})
test('should render vertical datepicker', function() {
  var onDatesChange = jest.fn()
  var container = render(
    React.createElement(Datepicker, {
      vertical: true,
      startDate: null,
      endDate: null,
      focusedInput: START_DATE,
      onDatesChange: onDatesChange,
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should go to next and previous month - vertical variant', function() {
  var onDatesChange = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
        vertical: true,
        startDate: null,
        endDate: null,
        focusedInput: START_DATE,
        onDatesChange: onDatesChange,
      }),
    ),
    container = _a.container,
    getAllByTestId = _a.getAllByTestId
  expect(container).toMatchSnapshot()
  // Go to next month
  act(function() {
    fireEvent.click(getAllByTestId('DatepickerNavButton')[1])
  })
  expect(container).toMatchSnapshot()
  // Go to prev month
  act(function() {
    fireEvent.click(getAllByTestId('DatepickerNavButton')[0])
  })
  expect(container).toMatchSnapshot()
})
test('should have empty end date and focused end date', function() {
  var onDatesChange = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
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
test('should execute onClose callback', function() {
  var onDatesChange = jest.fn()
  var onClose = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
        firstDayOfWeek: 0,
        minBookingDate: new Date(2019, 1, 16, 0, 0, 0),
        maxBookingDate: new Date(2020, 1, 16, 0, 0, 0),
        startDate: new Date(2019, 2, 16, 0, 0, 0),
        endDate: null,
        focusedInput: END_DATE,
        onDatesChange: onDatesChange,
        onClose: onClose,
        displayFormat: 'dd.MM.yyyy',
        phrases: {
          datepickerStartDatePlaceholder: 'test',
          datepickerStartDateLabel: 'test',
          datepickerEndDateLabel: 'test',
          datepickerEndDatePlaceholder: 'test',
          resetDates: 'test',
          close: 'test',
        },
      }),
    ),
    getByTestId = _a.getByTestId,
    getByText = _a.getByText,
    getAllByText = _a.getAllByText
  // Get formatted date
  getByText('16.03.2019')
  expect(getAllByText('test').length).toBe(5)
  fireEvent.click(getByTestId('DatepickerClose'))
  expect(onClose).toHaveBeenCalled()
})
test('should select today date with right arrow key', function() {
  advanceTo(new Date(2019, 2, 1, 0, 0, 0))
  var onDatesChange = jest.fn()
  var onClose = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
        firstDayOfWeek: 0,
        startDate: null,
        endDate: null,
        focusedInput: START_DATE,
        onDatesChange: onDatesChange,
        onClose: onClose,
        displayFormat: 'DD.MM.YYYY',
      }),
    ),
    container = _a.container,
    getAllByTestId = _a.getAllByTestId
  fireEvent.keyDown(container, {key: 'ArrowRight'})
  // @ts-ignore
  expect(getAllByTestId('Day')[0]).toHaveFocus()
  clear()
})
test('should select today date with left arrow key', function() {
  advanceTo(new Date(2019, 2, 1, 0, 0, 0))
  var onDatesChange = jest.fn()
  var onClose = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
        firstDayOfWeek: 0,
        startDate: null,
        endDate: null,
        focusedInput: START_DATE,
        onDatesChange: onDatesChange,
        onClose: onClose,
        displayFormat: 'DD.MM.YYYY',
      }),
    ),
    container = _a.container,
    getAllByTestId = _a.getAllByTestId
  fireEvent.keyDown(container, {key: 'ArrowLeft'})
  // @ts-ignore
  expect(getAllByTestId('Day')[0]).toHaveFocus()
  clear()
})
test('should select today date with up arrow key', function() {
  advanceTo(new Date(2019, 2, 1, 0, 0, 0))
  var onDatesChange = jest.fn()
  var onClose = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
        firstDayOfWeek: 0,
        startDate: null,
        endDate: null,
        focusedInput: START_DATE,
        onDatesChange: onDatesChange,
        onClose: onClose,
        displayFormat: 'DD.MM.YYYY',
      }),
    ),
    container = _a.container,
    getAllByTestId = _a.getAllByTestId
  fireEvent.keyDown(container, {key: 'ArrowUp'})
  // @ts-ignore
  expect(getAllByTestId('Day')[0]).toHaveFocus()
  clear()
})
test('should select today date with down arrow key', function() {
  advanceTo(new Date(2019, 2, 1, 0, 0, 0))
  var onDatesChange = jest.fn()
  var onClose = jest.fn()
  var _a = render(
      React.createElement(Datepicker, {
        firstDayOfWeek: 0,
        startDate: null,
        endDate: null,
        focusedInput: START_DATE,
        onDatesChange: onDatesChange,
        onClose: onClose,
        displayFormat: 'DD.MM.YYYY',
      }),
    ),
    container = _a.container,
    getAllByTestId = _a.getAllByTestId
  fireEvent.keyDown(container, {key: 'ArrowDown'})
  // @ts-ignore
  expect(getAllByTestId('Day')[0]).toHaveFocus()
  // Next week
  fireEvent.keyDown(getAllByTestId('Day')[0], {key: 'ArrowDown'})
  // @ts-ignore
  expect(getAllByTestId('Day')[7]).toHaveFocus()
  // Previous week
  fireEvent.keyDown(getAllByTestId('Day')[7], {key: 'ArrowUp'})
  // @ts-ignore
  expect(getAllByTestId('Day')[0]).toHaveFocus()
  // Next day
  fireEvent.keyDown(getAllByTestId('Day')[0], {key: 'ArrowRight'})
  // @ts-ignore
  expect(getAllByTestId('Day')[1]).toHaveFocus()
  // Previous day
  fireEvent.keyDown(getAllByTestId('Day')[1], {key: 'ArrowLeft'})
  // @ts-ignore
  expect(getAllByTestId('Day')[0]).toHaveFocus()
  clear()
})
//# sourceMappingURL=Datepicker.test.js.map
