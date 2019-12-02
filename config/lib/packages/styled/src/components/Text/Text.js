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
import {fontFamily, fontSize, fontWeight, color, lineHeight, space, compose} from 'styled-system'
var composeStyles = compose(
  fontFamily,
  fontSize,
  fontWeight,
  color,
  lineHeight,
  space,
)
var Text = styled('div')(
  templateObject_1 || (templateObject_1 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
  composeStyles,
)
export default Text
var templateObject_1
//# sourceMappingURL=Text.js.map
