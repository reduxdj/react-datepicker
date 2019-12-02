import React from 'react'
import {render} from '@testing-library/react'
import CalendarIcon from '.'
test('should match snapshot', function() {
  var container = render(
    React.createElement(CalendarIcon, {height: '30px', width: '30px', color: 'red'}),
  ).container
  expect(container).toMatchSnapshot()
})
test('should get classname', function() {
  var container = render(
    React.createElement(CalendarIcon, {
      height: '30px',
      width: '30px',
      color: 'red',
      className: 'test',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
//# sourceMappingURL=CalendarIcon.test.js.map
