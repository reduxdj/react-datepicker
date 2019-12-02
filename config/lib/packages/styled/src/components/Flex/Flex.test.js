import React from 'react'
import {render} from '../../testUtil'
import Flex from '.'
test('should match snapshot', function() {
  var container = render(
    React.createElement(
      Flex,
      {
        height: '50px',
        width: '50px',
        gridArea: 'test',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        m: '30px',
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
//# sourceMappingURL=Flex.test.js.map
