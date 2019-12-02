import * as React from 'react'
import {render} from '@testing-library/react'
import RedoIcon from '.'
test('should match snapshot', function() {
  var container = render(
    React.createElement(RedoIcon, {height: '30px', width: '30px', color: 'red'}),
  ).container
  expect(container).toMatchSnapshot()
})
test('should get className', function() {
  var container = render(
    React.createElement(RedoIcon, {height: '30px', width: '30px', color: 'red', className: 'test'}),
  ).container
  expect(container).toMatchSnapshot()
})
//# sourceMappingURL=RedoIcon.test.js.map
