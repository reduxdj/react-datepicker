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
  alignItems,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  space,
  gridArea,
  height,
  width,
  compose,
} from 'styled-system'
import styled from 'styled-components'
var composeFlexStyles = compose(
  space,
  flex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  gridArea,
  height,
  width,
)
var Flex = styled('div')(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  display: flex;\n  ', '\n'],
      ['\n  display: flex;\n  ', '\n'],
    )),
  composeFlexStyles,
)
export default Flex
var templateObject_1
//# sourceMappingURL=Flex.js.map
