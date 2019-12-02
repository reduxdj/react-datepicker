import React from 'react'
import {render} from '@testing-library/react'
import ArrowIcon from '.'
test('should match snapshot', function() {
  var container = render(
    React.createElement(ArrowIcon, {height: '14px', width: '14px', iconColor: 'red'}),
  ).container
  expect(container).toMatchSnapshot()
})
test('should get className', function() {
  var container = render(
    React.createElement(ArrowIcon, {
      height: '14px',
      width: '14px',
      iconColor: 'red',
      className: 'test',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should be facing to the left', function() {
  var container = render(
    React.createElement(ArrowIcon, {
      direction: 'left',
      height: '14px',
      width: '14px',
      iconColor: 'red',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should be facing to the right', function() {
  var container = render(
    React.createElement(ArrowIcon, {
      direction: 'right',
      height: '14px',
      width: '14px',
      iconColor: 'red',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should be facing to the down', function() {
  var container = render(
    React.createElement(ArrowIcon, {
      direction: 'down',
      height: '14px',
      width: '14px',
      iconColor: 'red',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
test('should be facing to the up', function() {
  var container = render(
    React.createElement(ArrowIcon, {
      direction: 'up',
      height: '14px',
      width: '14px',
      iconColor: 'red',
    }),
  ).container
  expect(container).toMatchSnapshot()
})
//# sourceMappingURL=ArrowIcon.test.js.map
