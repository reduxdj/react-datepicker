import * as React from 'react'
import {render} from '../../testUtil'
import DayLabel from '.'
test('should match snapshot', function() {
  var container = render(React.createElement(DayLabel, {label: 'Test'})).container
  expect(container).toMatchSnapshot()
})
//# sourceMappingURL=DayLabel.test.js.map
