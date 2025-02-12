import React from 'react'
import {render} from '../../testUtil'
import Text from '.'
test('should match snapshot', function() {
  var container = render(
    React.createElement(
      Text,
      {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontWeight: 500,
        color: '#000000',
        lineHeight: 1.2,
        p: '10px',
        m: '10px',
      },
      'Test',
    ),
  ).container
  expect(container).toMatchSnapshot()
  // @ts-ignore
  expect(container.firstChild).toHaveTextContent('Test')
})
test('should match style rules', function() {
  var container = render(
    React.createElement(
      Text,
      {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontWeight: 500,
        color: '#000000',
        lineHeight: 1.2,
        p: '10px',
        m: '10px',
      },
      'Test',
    ),
  ).container
  // @ts-ignore
  expect(container.firstChild).toHaveStyleRule('font-family', 'Montserrat')
  // @ts-ignore
  expect(container.firstChild).toHaveStyleRule('font-weight', '500')
  // @ts-ignore
  expect(container.firstChild).toHaveStyleRule('font-size', '14px')
  // @ts-ignore
  expect(container.firstChild).toHaveStyleRule('color', '#000000')
  // @ts-ignore
  expect(container.firstChild).toHaveStyleRule('line-height', '1.2')
  // @ts-ignore
  expect(container.firstChild).toHaveStyleRule('margin', '10px')
  // @ts-ignore
  expect(container.firstChild).toHaveStyleRule('padding', '10px')
})
//# sourceMappingURL=Test.test.js.map
