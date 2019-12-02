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
import React, {useContext} from 'react'
import styled, {css, ThemeContext} from 'styled-components'
import RedoIcon from '../../icons/RedoIcon'
import Text from '../Text'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
import getThemeProp from '../../utils/getThemeProp'
var StyledReactDates = styled('button')(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
      ],
      [
        '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
      ],
    )),
)
var RedoIconStyle = styled(RedoIcon)(
  templateObject_3 || (templateObject_3 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
  function(_a) {
    var rtl = _a.rtl
    return (
      rtl &&
      css(
        templateObject_2 ||
          (templateObject_2 = __makeTemplateObject(
            ['\n      transform: rotate(-180deg);\n    '],
            ['\n      transform: rotate(-180deg);\n    '],
          )),
      )
    )
  },
)
function ResetDates(_a) {
  var onResetDates = _a.onResetDates,
    text = _a.text,
    rtl = _a.rtl
  var themeContext = useContext(ThemeContext)
  var theme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    resetDatesIconColor: getThemeProp('mud', globalStyles.colors.mud, themeContext),
    resetDatesIconHeight: '14px',
    resetDatesIconWidth: '14px',
    resetDatesTextColor: getThemeProp('darcula', globalStyles.colors.darcula, themeContext),
    resetDatesTextMargin: rtl ? '1px 8px 0 0' : '1px 0 0 8px',
    resetDatesTextLineHeight: 1.18,
    resetDatesTextFontSize: '11px',
  })
  function handleMouseUp(e) {
    // @ts-ignore
    e.currentTarget.blur()
  }
  return React.createElement(
    StyledReactDates,
    {'aria-label': 'Reset dates', tabIndex: -1, onClick: onResetDates, onMouseUp: handleMouseUp},
    React.createElement(
      RedoIconStyle,
      // @ts-ignore
      {
        // @ts-ignore
        height: theme.resetDatesIconHeight,
        // @ts-ignore
        width: theme.resetDatesIconWidth,
        // @ts-ignore
        color: theme.resetDatesIconColor,
        rtl: rtl,
      },
    ),
    React.createElement(
      Text,
      {
        m: theme.resetDatesTextMargin,
        lineHeight: theme.resetDatesTextLineHeight,
        fontFamily: theme.fontFamily,
        fontSize: theme.resetDatesTextFontSize,
        // @ts-ignore
        color: theme.resetDatesTextColor,
      },
      text,
    ),
  )
}
export default ResetDates
var templateObject_1, templateObject_2, templateObject_3
//# sourceMappingURL=ResetDates.js.map
