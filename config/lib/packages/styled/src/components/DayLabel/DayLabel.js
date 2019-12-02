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
    dayLabelColor: getThemeProp('silverCloud', globalStyles.colors.silverCloud, themeContext),
    dayLabelFontWeight: 500,
    dayLabelFontSize: '11px',
  })
  return React.createElement(
    Text,
    {
      fontFamily: theme.fontFamily,
      fontSize: theme.dayLabelFontSize,
      fontWeight: theme.dayLabelFontWeight,
      // @ts-ignore
      color: theme.dayLabelColor,
      'data-testid': 'DayLabel',
    },
    label,
  )
}
export default MonthLabel
//# sourceMappingURL=DayLabel.js.map
