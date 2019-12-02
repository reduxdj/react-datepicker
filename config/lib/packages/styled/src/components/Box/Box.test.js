import React from 'react'
import {render} from '../../testUtil'
import Box from '.'
test('should match snapshot', function() {
  var container = render(
    React.createElement(
      Box,
      {
        gridArea: 'test',
        height: '150px',
        width: '150px',
        p: '10px',
        position: 'relative',
        top: '10px',
        left: '15px',
        right: '20px',
        bottom: '30px',
        zIndex: 1,
      },
      React.createElement('div', null, 'test1'),
      React.createElement('div', null, 'test2'),
      React.createElement('div', null, 'test3'),
      React.createElement('div', null, 'test4'),
      React.createElement('div', null, 'test5'),
    ),
  ).container
  expect(container).toMatchSnapshot()
})
//# sourceMappingURL=Box.test.js.map
