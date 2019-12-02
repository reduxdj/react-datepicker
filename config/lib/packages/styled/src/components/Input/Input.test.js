import * as React from 'react'
import {render, fireEvent} from '../../testUtil'
import Input from '.'
test('should render with icon', function() {
  var onClick = jest.fn()
  var _a = render(
      React.createElement(Input, {
        rtl: false,
        vertical: false,
        isActive: false,
        showCalendarIcon: true,
        ariaLabel: 'startDate',
        id: 'startDate',
        placeholder: 'Placeholder',
        onClick: onClick,
        value: '',
        dateFormat: 'MM/DD/YYYY',
      }),
    ),
    container = _a.container,
    getByPlaceholderText = _a.getByPlaceholderText
  expect(container).toMatchSnapshot()
  getByPlaceholderText('Placeholder')
  // @ts-ignore
  fireEvent.focus(getByPlaceholderText('Placeholder'))
  expect(onClick).toHaveBeenCalled()
})
test('should render rtl variant', function() {
  var onClick = jest.fn()
  var _a = render(
      React.createElement(Input, {
        rtl: true,
        vertical: false,
        isActive: false,
        showCalendarIcon: true,
        ariaLabel: 'startDate',
        id: 'startDate',
        placeholder: 'Placeholder',
        onClick: onClick,
        value: '',
        dateFormat: 'MM/DD/YYYY',
      }),
    ),
    container = _a.container,
    getByPlaceholderText = _a.getByPlaceholderText
  expect(container).toMatchSnapshot()
  getByPlaceholderText('Placeholder')
  // @ts-ignore
  fireEvent.focus(getByPlaceholderText('Placeholder'))
  expect(onClick).toHaveBeenCalled()
})
test('should render without icon', function() {
  var onClick = jest.fn()
  var container = render(
    React.createElement(Input, {
      rtl: false,
      vertical: false,
      showCalendarIcon: false,
      isActive: false,
      ariaLabel: 'startDate',
      id: 'startDate',
      placeholder: 'Placeholder',
      onClick: onClick,
      value: '',
      dateFormat: 'MM/DD/YYYY',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should render with value', function() {
  var onClick = jest.fn()
  var _a = render(
      React.createElement(Input, {
        rtl: false,
        vertical: false,
        showCalendarIcon: false,
        isActive: false,
        ariaLabel: 'startDate',
        id: 'startDate',
        placeholder: 'Placeholder',
        onClick: onClick,
        value: '14/11/1992',
        dateFormat: 'MM/DD/YYYY',
      }),
    ),
    container = _a.container,
    getByDisplayValue = _a.getByDisplayValue
  expect(container).toMatchSnapshot()
  getByDisplayValue('14/11/1992')
})
test('should render vertical variant', function() {
  var onClick = jest.fn()
  var container = render(
    React.createElement(Input, {
      vertical: true,
      isActive: true,
      rtl: false,
      showCalendarIcon: false,
      ariaLabel: 'startDate',
      id: 'startDate',
      placeholder: 'Placeholder',
      onClick: onClick,
      value: '14/11/1992',
      dateFormat: 'MM/DD/YYYY',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
//# sourceMappingURL=Input.test.js.map
