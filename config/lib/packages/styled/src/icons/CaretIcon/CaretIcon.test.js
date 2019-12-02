import * as React from 'react'
import {render} from '@testing-library/react'
import CaretIcon from '.'
test('should match snapshot', function() {
  var container = render(
    React.createElement(CaretIcon, {height: '30px', width: '30px', color: 'red'}),
  ).container
  expect(container).toMatchSnapshot()
})
test('should get classname', function() {
  var container = render(
    React.createElement(CaretIcon, {
      height: '30px',
      width: '30px',
      color: 'red',
      className: 'test',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should be facing to the left', function() {
  var container = render(
    React.createElement(CaretIcon, {
      height: '30px',
      width: '30px',
      color: 'red',
      direction: 'left',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should be facing to the right', function() {
  var container = render(
    React.createElement(CaretIcon, {
      height: '30px',
      width: '30px',
      color: 'red',
      direction: 'right',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should be facing down', function() {
  var container = render(
    React.createElement(CaretIcon, {
      height: '30px',
      width: '30px',
      color: 'red',
      direction: 'down',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should be facing up', function() {
  var container = render(
    React.createElement(CaretIcon, {height: '30px', width: '30px', color: 'red', direction: 'up'}),
  ).container
  expect(container).toMatchSnapshot()
})
//# sourceMappingURL=CaretIcon.test.js.map
