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
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
import getThemeProp from '../../utils/getThemeProp'
import Text from '../Text'
import Box from '../Box'
var StyledDate = styled(Text)(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        "\n  position: relative;\n  display: inline-block;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n  }\n\n  ",
        '\n',
      ],
      [
        "\n  position: relative;\n  display: inline-block;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n  }\n\n  ",
        '\n',
      ],
    )),
  function(_a) {
    var isActive = _a.isActive,
      selectDateBorderColor = _a.selectDateBorderColor
    return (
      isActive &&
      css(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            ['\n      &:after {\n        background: ', ';\n      }\n    '],
            ['\n      &:after {\n        background: ', ';\n      }\n    '],
          )),
        selectDateBorderColor,
      )
    )
  },
)
function SelectDate(_a) {
  var title = _a.title,
    isActive = _a.isActive,
    date = _a.date,
    vertical = _a.vertical
  var themeContext = useContext(ThemeContext)
  var theme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    selectDateLabelFontSize: '11px',
    selectDateLabelColor: getThemeProp(
      'silverCloud',
      globalStyles.colors.silverCloud,
      themeContext,
    ),
    selectDateLabelMargin: '0 0 8px',
    selectDateDateColor: getThemeProp('charcoal', globalStyles.colors.charcoal, themeContext),
    selectDateDateFontSize: vertical ? '16px' : '24px',
    selectDateDateFontWeight: 500,
    selectDateDatePadding: '0 0 15px',
    selectDateBorderColor: getThemeProp(
      'primaryColor',
      globalStyles.colors.primaryColor,
      themeContext,
    ),
    selectDatePadding: '0',
  })
  return React.createElement(
    Box,
    {p: theme.selectDatePadding},
    React.createElement(
      Text,
      {
        fontFamily: theme.fontFamily,
        fontSize: theme.selectDateLabelFontSize,
        // @ts-ignore
        color: theme.selectDateLabelColor,
        m: theme.selectDateLabelMargin,
      },
      title,
    ),
    React.createElement(
      StyledDate,
      {
        as: 'span',
        // @ts-ignore
        color: theme.selectDateDateColor,
        fontSize: theme.selectDateDateFontSize,
        fontWeight: theme.selectDateDateFontWeight,
        fontFamily: theme.fontFamily,
        p: theme.selectDateDatePadding,
        isActive: isActive,
        // @ts-ignore
        selectDateBorderColor: theme.selectDateBorderColor,
      },
      date,
    ),
  )
}
export default SelectDate
var templateObject_1, templateObject_2
//# sourceMappingURL=SelectedDate.js.map
