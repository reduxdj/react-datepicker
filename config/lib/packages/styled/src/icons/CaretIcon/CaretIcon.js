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
import React from 'react'
import styled, {css} from 'styled-components'
var Svg = styled('svg')(
  templateObject_2 || (templateObject_2 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
  function(_a) {
    var angle = _a.angle
    return css(
      templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      angle,
    )
  },
)
function calculateAngle(direction) {
  switch (direction) {
    case 'up':
      return 180
    case 'down':
      return 0
    case 'left':
      return 90
    case 'right':
    default:
      return -90
  }
}
function CaretIcon(_a) {
  var height = _a.height,
    width = _a.width,
    color = _a.color,
    _b = _a.direction,
    direction = _b === void 0 ? 'right' : _b,
    _c = _a.className,
    className = _c === void 0 ? '' : _c
  var angle = calculateAngle(direction)
  return React.createElement(
    Svg,
    {
      width: width,
      height: height,
      color: color,
      className: className,
      angle: angle,
      viewBox: '0 0 9 6',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      d:
        'M4.058 4.594L1.185 1.72a.312.312 0 1 1 .442-.442L4.5 4.152l2.873-2.873a.312.312 0 1 1 .442.442L4.723 4.812a.316.316 0 0 1-.446 0l-.219-.218z',
    }),
  )
}
export default CaretIcon
var templateObject_1, templateObject_2
//# sourceMappingURL=CaretIcon.js.map
