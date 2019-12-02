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
import {width, height, background, space, borders, compose} from 'styled-system'
import CaretIcon from '../../icons/CaretIcon'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
import getThemeProp from '../../utils/getThemeProp'
var composeSyles = compose(
  width,
  height,
  background,
  space,
  borders,
)
var StyledNavButton = styled('button')(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
      ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
    )),
  composeSyles,
)
function NavButton(_a) {
  var type = _a.type,
    onClick = _a.onClick,
    vertical = _a.vertical,
    rtl = _a.rtl,
    ariaLabel = _a.ariaLabel
  var themeContext = useContext(ThemeContext)
  var theme = useThemeProps({
    navButtonWidth: vertical ? '48px' : '30px',
    navButtonHeight: vertical ? '48px' : '30px',
    navButtonBackground: getThemeProp('white', globalStyles.colors.white, themeContext),
    navButtonBorder:
      '1px solid ' + getThemeProp('silverCloud', globalStyles.colors.silverCloud, themeContext),
    navButtonPadding: '0',
    navButtonIconHeight: vertical ? '18px' : '11px',
    navButtonIconWidth: vertical ? '28px' : '18px',
    navButtonIconColor: getThemeProp('greey', globalStyles.colors.greey, themeContext),
  })
  function handleMouseUp(e) {
    // @ts-ignore
    e.currentTarget.blur()
  }
  function getDirection() {
    if (type === 'next' && !vertical) {
      return 'right'
    } else if (type === 'next' && vertical) {
      return 'down'
    } else if (type === 'prev' && !vertical) {
      return 'left'
    }
    return 'up'
  }
  return React.createElement(
    StyledNavButton,
    {
      width: theme.navButtonWidth,
      height: theme.navButtonHeight,
      background: theme.navButtonBackground,
      border: theme.navButtonBorder,
      borderRight: getDirection() === 'up' && !rtl ? 'unset' : theme.navButtonBorder,
      borderLeft: getDirection() === 'up' && rtl ? 'unset' : theme.navButtonBorder,
      p: theme.navButtonPadding,
      type: 'button',
      'aria-label': ariaLabel,
      onClick: onClick,
      onMouseUp: handleMouseUp,
      'data-testid': 'DatepickerNavButton',
    },
    React.createElement(
      CaretIcon,
      // @ts-ignore
      {
        // @ts-ignore
        width: theme.navButtonIconWidth,
        // @ts-ignore
        height: theme.navButtonIconHeight,
        // @ts-ignore
        color: theme.navButtonIconColor,
        direction: getDirection(),
      },
    ),
  )
}
export default NavButton
var templateObject_1
//# sourceMappingURL=NavButton.js.map
