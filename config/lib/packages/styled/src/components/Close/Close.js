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
import styled, {ThemeContext} from 'styled-components'
import {color, space, fontSize, fontFamily, fontWeight, compose} from 'styled-system'
import CloseIcon from '../../icons/CloseIcon'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
import getThemeProp from '../../utils/getThemeProp'
var composeTextStyles = compose(
  space,
  color,
  fontSize,
  fontFamily,
  fontWeight,
)
var Text = styled('div')(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
    )),
  composeTextStyles,
)
var Wrapper = styled('button')(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
        ' {\n      ',
        '\n    }\n\n    svg {\n      ',
        '\n    }\n  }\n',
      ],
      [
        '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
        ' {\n      ',
        '\n    }\n\n    svg {\n      ',
        '\n    }\n  }\n',
      ],
    )),
  Text,
  color,
  color,
)
function Close(_a) {
  var onClick = _a.onClick,
    rtl = _a.rtl,
    closeText = _a.closeText
  var themeContext = useContext(ThemeContext)
  var theme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    closeMargin: rtl ? '1px 16px 0 0' : '1px 0 0 16px',
    closeColor: getThemeProp('silverCloud', globalStyles.colors.silverCloud, themeContext),
    closeHoverColor: getThemeProp('darcula', globalStyles.colors.darcula, themeContext),
    closeFontSize: '12px',
    closeFontWeight: 600,
  })
  return React.createElement(
    Wrapper,
    {
      onClick: onClick,
      // @ts-ignore
      color: theme.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    React.createElement(CloseIcon, {width: '15px', height: '16px', color: '#ADADAD'}),
    React.createElement(
      Text,
      {
        m: theme.closeMargin,
        // @ts-ignore
        color: theme.closeColor,
        fontSize: theme.closeFontSize,
        fontFamily: theme.fontFamily,
        fontWeight: theme.closeFontWeight,
      },
      closeText,
    ),
  )
}
export default Close
var templateObject_1, templateObject_2
//# sourceMappingURL=Close.js.map
