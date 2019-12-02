import React, {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import Text from '../Text'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
import getThemeProp from '../../utils/getThemeProp'
var MonthLabel = function(_a) {
  var label = _a.label
  var themeContext = useContext(ThemeContext)
  var theme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    monthLabelColor: getThemeProp('darcula', globalStyles.colors.darcula, themeContext),
    monthLabelLineHeight: 1.57,
    monthLabelFontWeight: 600,
    monthLabelFontSize: '14px',
  })
  return React.createElement(
    Text,
    {
      fontFamily: theme.fontFamily,
      fontSize: theme.monthLabelFontSize,
      fontWeight: theme.monthLabelFontWeight,
      lineHeight: theme.monthLabelLineHeight,
      // @ts-ignore
      color: theme.monthLabelColor,
      'data-testid': 'MonthLabel',
    },
    label,
  )
}
export default MonthLabel
//# sourceMappingURL=MonthLabel.js.map
