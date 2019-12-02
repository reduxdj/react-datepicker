import * as React from 'react'
import {render, fireEvent} from '../../testUtil'
import NavButton from '.'
test('should match snapshot - prev month', function() {
  var container = render(
    React.createElement(NavButton, {
      ariaLabel: 'test',
      vertical: false,
      rtl: false,
      type: 'prev',
      onClick: jest.fn(),
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should match snapshot - prev month rtl', function() {
  var container = render(
    React.createElement(NavButton, {
      ariaLabel: 'test',
      rtl: true,
      vertical: false,
      type: 'prev',
      onClick: jest.fn(),
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should match snapshot - next month', function() {
  var container = render(
    React.createElement(NavButton, {
      ariaLabel: 'test',
      vertical: false,
      rtl: false,
      type: 'next',
      onClick: jest.fn(),
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should match snapshot - next month rtl', function() {
  var container = render(
    React.createElement(NavButton, {
      ariaLabel: 'test',
      rtl: true,
      vertical: false,
      type: 'next',
      onClick: jest.fn(),
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should match snapshot - prev month vertical', function() {
  var container = render(
    React.createElement(NavButton, {
      ariaLabel: 'test',
      vertical: true,
      type: 'prev',
      rtl: false,
      onClick: jest.fn(),
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should match snapshot - next month vertical', function() {
  var container = render(
    React.createElement(NavButton, {
      ariaLabel: 'test',
      vertical: true,
      type: 'next',
      rtl: false,
      onClick: jest.fn(),
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should match snapshot - prev month vertical, rtl', function() {
  var container = render(
    React.createElement(NavButton, {
      ariaLabel: 'test',
      vertical: true,
      type: 'prev',
      rtl: true,
      onClick: jest.fn(),
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should match snapshot - next month vertical, rtl', function() {
  var container = render(
    React.createElement(NavButton, {
      ariaLabel: 'test',
      vertical: true,
      type: 'next',
      rtl: true,
      onClick: jest.fn(),
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should execute onClick callback', function() {
  var onClick = jest.fn()
  var container = render(
    React.createElement(NavButton, {
      ariaLabel: 'test',
      vertical: false,
      rtl: false,
      type: 'next',
      onClick: onClick,
    }),
  ).container
  // @ts-ignore
  fireEvent.click(container.firstChild)
  expect(onClick).toHaveBeenCalled()
  // @ts-ignore
  fireEvent.mouseUp(container.firstChild)
  expect(container).toMatchSnapshot()
})
//# sourceMappingURL=NavButton.test.js.map
