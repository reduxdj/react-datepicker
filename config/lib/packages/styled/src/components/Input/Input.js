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
import React, {useContext, useState, useEffect, useRef} from 'react'
import styled, {ThemeContext} from 'styled-components'
import {parseDate} from '@datepicker-react/hooks'
import {
  background,
  border,
  borderRadius,
  space,
  fontFamily,
  fontSize,
  color,
  fontWeight,
  position,
  top,
  left,
  width,
  height,
  display,
  minHeight,
  boxShadow,
  right,
  style,
  compose,
} from 'styled-system'
import CalendarIcon from '../../icons/CalendarIcon'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
import getThemeProp from '../../utils/getThemeProp'
var placeholderColor = style({
  prop: 'placeholderColor',
  cssProperty: 'color',
})
var placeholderFontWeight = style({
  prop: 'placeholderFontWeight',
  cssProperty: 'fontWeight',
})
var composeInputLabelStyles = compose(
  position,
  border,
  background,
  display,
  borderRadius,
  space,
)
var InputLabel = styled('label')(
  templateObject_1 || (templateObject_1 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
  composeInputLabelStyles,
)
var composeCalendarWrapperStyles = compose(
  position,
  left,
  right,
  top,
  height,
  width,
)
var CalendarWrapper = styled('div')(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
      ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
    )),
  composeCalendarWrapperStyles,
)
var composeStyledInputStyle = compose(
  background,
  space,
  fontFamily,
  fontSize,
  color,
  fontWeight,
  space,
  border,
  width,
  minHeight,
  boxShadow,
)
var StyledInput = styled('input')(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  ',
        '\n  cursor: pointer;\n  box-sizing: border-box;\n  outline: 0;\n\n  ::-webkit-input-placeholder {\n    /* Chrome/Opera/Safari */\n    ',
        '\n    ',
        '\n  }\n  ::-moz-placeholder {\n    /* Firefox 19+ */\n    ',
        '\n    ',
        '\n  }\n  :-moz-placeholder {\n    /* Firefox 18- */\n    ',
        '\n    ',
        '\n  }\n',
      ],
      [
        '\n  ',
        '\n  cursor: pointer;\n  box-sizing: border-box;\n  outline: 0;\n\n  ::-webkit-input-placeholder {\n    /* Chrome/Opera/Safari */\n    ',
        '\n    ',
        '\n  }\n  ::-moz-placeholder {\n    /* Firefox 19+ */\n    ',
        '\n    ',
        '\n  }\n  :-moz-placeholder {\n    /* Firefox 18- */\n    ',
        '\n    ',
        '\n  }\n',
      ],
    )),
  composeStyledInputStyle,
  placeholderFontWeight,
  placeholderColor,
  placeholderFontWeight,
  placeholderColor,
  placeholderFontWeight,
  placeholderColor,
)
function Input(_a) {
  var placeholder = _a.placeholder,
    id = _a.id,
    vertical = _a.vertical,
    isActive = _a.isActive,
    ariaLabel = _a.ariaLabel,
    onClick = _a.onClick,
    value = _a.value,
    showCalendarIcon = _a.showCalendarIcon,
    padding = _a.padding,
    rtl = _a.rtl,
    disableAccessibility = _a.disableAccessibility,
    dateFormat = _a.dateFormat,
    _b = _a.onChange,
    onChange = _b === void 0 ? function() {} : _b
  var _c = useState(value),
    searchString = _c[0],
    setSearchString = _c[1]
  var ref = useRef(null)
  useEffect(
    function() {
      setSearchString(value)
    },
    [value],
  )
  var themeContext = useContext(ThemeContext)
  var theme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    inputFontWeight: 600,
    inputFontSize: '14px',
    inputColor: getThemeProp('charcoal', globalStyles.colors.charcoal, themeContext),
    inputBackground: getThemeProp('white', globalStyles.colors.white, themeContext),
    inputMinHeight: '46px',
    inputWidth: '100%',
    inputPadding: padding,
    inputBorder: '0',
    inputPlaceholderFontWeight: 500,
    inputPlaceholderColor: getThemeProp(
      'silverCloud',
      globalStyles.colors.silverCloud,
      themeContext,
    ),
    inputCalendarWrapperPosition: 'absolute',
    inputCalendarWrapperHeight: '12px',
    inputCalendarWrapperWidth: '12px',
    inputCalendarWrapperTop: '16px',
    inputCalendarWrapperLeft: rtl ? 'unset' : vertical ? '8px' : '16px',
    inputCalendarWrapperRight: rtl ? (vertical ? '8px' : '16px') : 'unset',
    inputCalendarIconWidth: '12px',
    inputCalendarIconHeight: '12px',
    inputCalendarIconColor: getThemeProp('graci', globalStyles.colors.graci, themeContext),
    inputLabelDisplay: 'block',
    inputLabelPosition: 'relative',
    inputLabelBorder: '1px solid ' + getThemeProp('graci', globalStyles.colors.graci, themeContext),
    inputLabelBorderRadius: '2px',
    inputLabelBackground: getThemeProp('white', globalStyles.colors.white, themeContext),
    inputLabelMargin: '0',
    inputActiveBoxShadow:
      'inset 0px -3px 0 ' +
      getThemeProp('primaryColor', globalStyles.colors.primaryColor, themeContext),
  })
  function handleOnChange(e) {
    var dateValue = e.target.value
    setSearchString(dateValue)
    if (typeof ref.current === 'number') {
      // @ts-ignore
      clearTimeout(ref.current)
    }
    // @ts-ignore
    ref.current = setTimeout(function() {
      onClick()
      // @ts-ignore
      var parsedDate = parseDate(dateValue, dateFormat, new Date())
      // @ts-ignore
      if (!isNaN(parsedDate)) {
        onChange(parsedDate)
      }
    }, 1000)
  }
  return React.createElement(
    InputLabel,
    {
      htmlFor: id,
      display: theme.inputLabelDisplay,
      position: theme.inputLabelPosition,
      border: theme.inputLabelBorder,
      background: theme.inputLabelBackground,
      borderRadius: theme.inputLabelBorderRadius,
      m: theme.inputLabelMargin,
    },
    showCalendarIcon &&
      React.createElement(
        CalendarWrapper,
        {
          position: theme.inputCalendarWrapperPosition,
          height: theme.inputCalendarWrapperHeight,
          width: theme.inputCalendarWrapperWidth,
          top: theme.inputCalendarWrapperTop,
          left: theme.inputCalendarWrapperLeft,
          right: theme.inputCalendarWrapperRight,
        },
        React.createElement(
          CalendarIcon,
          // @ts-ignore
          {
            // @ts-ignore
            width: theme.inputCalendarIconWidth,
            // @ts-ignore
            height: theme.inputCalendarIconHeight,
            // @ts-ignore
            color: theme.inputCalendarIconColor,
          },
        ),
      ),
    React.createElement(StyledInput, {
      tabIndex: disableAccessibility ? -1 : 0,
      border: theme.inputBorder,
      p: theme.inputPadding,
      // @ts-ignore
      width: theme.inputWidth,
      minHeight: theme.inputMinHeight,
      background: theme.inputBackground,
      fontFamily: theme.fontFamily,
      // @ts-ignore
      color: theme.inputColor,
      fontSize: theme.inputFontSize,
      fontWeight: theme.inputFontWeight,
      placeholderColor: theme.inputPlaceholderColor,
      placeholderFontWeight: theme.inputPlaceholderFontWeight,
      boxShadow: isActive ? theme.inputActiveBoxShadow : 'none',
      id: id,
      placeholder: placeholder,
      'aria-label': ariaLabel,
      value: searchString,
      autoComplete: 'off',
      onChange: handleOnChange,
      onFocus: onClick,
      'data-testid': 'DatepickerInput',
    }),
  )
}
export default Input
var templateObject_1, templateObject_2, templateObject_3
//# sourceMappingURL=Input.js.map
