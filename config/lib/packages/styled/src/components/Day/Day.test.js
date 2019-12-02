import * as React from 'react'
import {render, fireEvent} from '../../testUtil'
import Day from '.'
test('should render disabled day', function() {
  var container = render(
    React.createElement(Day, {date: new Date(2019, 2, 27, 0, 0, 0), day: '1'}),
    {},
    {
      isDateBlocked: function() {
        return true
      },
    },
  ).container
  expect(container).toMatchSnapshot()
})
test('should render normal day', function() {
  var onDateSelect = jest.fn()
  var container = render(
    React.createElement(Day, {date: new Date(2019, 2, 27, 0, 0, 0), day: '1'}),
    {},
    {onDateSelect: onDateSelect},
  ).container
  expect(container).toMatchSnapshot()
  // @ts-ignore
  fireEvent.click(container.firstChild)
  expect(onDateSelect).toBeCalled()
})
test('should render active day', function() {
  var container = render(
    React.createElement(Day, {date: new Date(2019, 2, 27, 0, 0, 0), day: '1'}),
    {},
    {
      isDateSelected: function() {
        return true
      },
    },
  ).container
  expect(container).toMatchSnapshot()
})
test('should render first or last active day', function() {
  var container = render(
    React.createElement(Day, {date: new Date(2019, 2, 27, 0, 0, 0), day: '1'}),
    {},
    {
      isFirstOrLastSelectedDate: function() {
        return true
      },
    },
  ).container
  expect(container).toMatchSnapshot()
})
test('should execute onDateHover callback', function() {
  var onDateHover = jest.fn()
  var container = render(
    React.createElement(Day, {date: new Date(2019, 2, 27, 0, 0, 0), day: '1'}),
    {},
    {
      onDateHover: onDateHover,
      isDateHovered: function() {
        return true
      },
    },
  ).container
  // @ts-ignore
  fireEvent.mouseEnter(container.firstChild)
  expect(onDateHover).toBeCalled()
})
//# sourceMappingURL=Day.test.js.map
