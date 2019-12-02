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
import {
  bottom,
  compose,
  gridArea,
  height,
  left,
  position,
  right,
  space,
  top,
  width,
  zIndex,
} from 'styled-system'
import styled from 'styled-components'
var composeBoxStyles = compose(
  gridArea,
  height,
  space,
  width,
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
)
var Box = styled('div')(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  box-sizing: border-box;\n  ', '\n'],
      ['\n  box-sizing: border-box;\n  ', '\n'],
    )),
  composeBoxStyles,
)
export default Box
var templateObject_1
//# sourceMappingURL=Box.js.map
