var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', {value: raw})
    } else {
      cooked.raw = raw
    }
    return cooked
  }
import styled from 'styled-components'
import {
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  alignItems,
  justifyContent,
  gridColumnGap,
  gridGap,
  gridRowGap,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
  space,
  style,
  compose,
} from 'styled-system'
var daySizeGridTemplateColumns = style({
  // React prop name and CSS property
  prop: 'daySizeGridTemplateColumns',
  // CSS property (if different from prop argument)
  cssProperty: 'gridTemplateColumns',
  // key for theme values
  key: 'gridTemplateColumns',
  // accessor function for transforming the value
  transformValue: function(n) {
    return 'repeat(7, ' + n + 'px)'
  },
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})
var composeGridStyles = compose(
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridColumnGap,
  gridGap,
  gridRowGap,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
  alignItems,
  justifyContent,
  space,
)
var Grid = styled('div')(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  display: grid;\n  ', '\n  ', '\n'],
      ['\n  display: grid;\n  ', '\n  ', '\n'],
    )),
  composeGridStyles,
  daySizeGridTemplateColumns,
)
export default Grid
var templateObject_1
//# sourceMappingURL=Grid.js.map
