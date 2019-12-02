import * as React from 'react'
import {render} from '../../testUtil'
import MonthLabel from '.'
test('should match snapshot', function() {
  var container = render(React.createElement(MonthLabel, {label: 'Test'})).container
  expect(container).toMatchSnapshot()
})
//# sourceMappingURL=MonthLabel.test.js.map
