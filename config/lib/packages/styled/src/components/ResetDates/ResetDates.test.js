import * as React from 'react'
import {render, fireEvent} from '../../testUtil'
import ResetDates from '.'
test('should match snapshot', function() {
  var container = render(
    React.createElement(ResetDates, {rtl: false, text: 'Reset dates', onResetDates: jest.fn()}),
  ).container
  expect(container).toMatchSnapshot()
})
test('should render rtl variant', function() {
  var container = render(
    React.createElement(ResetDates, {rtl: true, text: 'Reset dates', onResetDates: jest.fn()}),
  ).container
  expect(container).toMatchSnapshot()
})
test('should execute onClick callback', function() {
  var onResetDates = jest.fn()
  var container = render(
    React.createElement(ResetDates, {rtl: false, text: 'Reset dates', onResetDates: onResetDates}),
  ).container
  // @ts-ignore
  fireEvent.click(container.firstChild)
  expect(onResetDates).toHaveBeenCalled()
  // @ts-ignore
  fireEvent.mouseUp(container.firstChild)
})
//# sourceMappingURL=ResetDates.test.js.map
