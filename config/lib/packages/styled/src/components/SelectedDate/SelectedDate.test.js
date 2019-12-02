import * as React from 'react'
import {render} from '../../testUtil'
import SelectedDate from '.'
test('should be unactive', function() {
  var container = render(
    React.createElement(SelectedDate, {
      vertical: false,
      title: 'test',
      isActive: false,
      date: '15.10.2018',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should be active', function() {
  var container = render(
    React.createElement(SelectedDate, {
      isActive: true,
      vertical: false,
      title: 'test',
      date: '15.10.2018',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should render vertical variant', function() {
  var container = render(
    React.createElement(SelectedDate, {
      vertical: true,
      isActive: true,
      title: 'test',
      date: '15.10.2018',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
//# sourceMappingURL=SelectedDate.test.js.map
