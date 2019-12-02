import React from 'react'
import {render, fireEvent} from '../../testUtil'
import CloseModal from '.'
test('should match snapshot', function() {
  var container = render(
    React.createElement(CloseModal, {closeText: 'Close', rtl: false, onClick: jest.fn()}),
  ).container
  expect(container).toMatchSnapshot()
})
test('should render rtl variant', function() {
  var container = render(
    React.createElement(CloseModal, {closeText: 'Close', rtl: false, onClick: jest.fn()}),
  ).container
  expect(container).toMatchSnapshot()
})
test('should execute callback', function() {
  var onClick = jest.fn()
  var container = render(
    React.createElement(CloseModal, {closeText: 'Close', rtl: false, onClick: onClick}),
  ).container
  // @ts-ignore
  fireEvent.click(container.firstChild)
  expect(onClick).toHaveBeenCalled()
})
//# sourceMappingURL=Close.test.js.map
