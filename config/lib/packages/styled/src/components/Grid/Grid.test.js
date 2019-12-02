import React from 'react'
import {render} from '../../testUtil'
import Grid from '.'
test('should match snapshot', function() {
  var container = render(
    React.createElement(
      Grid,
      {
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(6, 1fr)',
        gridTemplateAreas: '"c1 c2 c3" "c4 c5 c6"',
        gridGap: '10px 10px',
        gridColumnGap: '10px',
        gridRowGap: '10px',
        justifyContent: 'initial',
        alignItems: 'initial',
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
//# sourceMappingURL=Grid.test.js.map
