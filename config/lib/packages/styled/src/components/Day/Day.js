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
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
import React, {useMemo, useContext, useRef} from 'react'
import styled, {css, ThemeContext} from 'styled-components'
import {compose, style} from 'styled-system'
import {useDay} from '@datepicker-react/hooks'
import {boxShadow, background, color, fontFamily, fontWeight, fontSize} from 'styled-system'
import Flex from '../Flex'
import datepickerContext from '../../context/datepickerContext'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
import getThemeProp from '../../utils/getThemeProp'
var dayHeight = style({
  // React prop name and CSS property
  prop: 'dayHeight',
  // CSS property (if different from prop argument)
  cssProperty: 'height',
  // key for theme values
  key: 'dayHeight',
  // accessor function for transforming the value
  transformValue: function(n) {
    return n + 'px'
  },
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})
var dayWidth = style({
  // React prop name and CSS property
  prop: 'dayWidth',
  // CSS property (if different from prop argument)
  cssProperty: 'width',
  // key for theme values
  key: 'dayWidth',
  // accessor function for transforming the value
  transformValue: function(n) {
    return n + 'px'
  },
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})
var dayHoverColor = style({
  // React prop name and CSS property
  prop: 'dayHoverColor',
  // CSS property (if different from prop argument)
  cssProperty: 'color',
  // key for theme values
  key: 'dayHoverColor',
  // accessor function for transforming the value
  transformValue: function(n) {
    return n
  },
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})
var daySelectedHoverColor = style({
  // React prop name and CSS property
  prop: 'daySelectedHoverColor',
  // CSS property (if different from prop argument)
  cssProperty: 'color',
  // key for theme values
  key: 'daySelectedHoverColor',
  // accessor function for transforming the value
  transformValue: function(n) {
    return n
  },
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})
var dayHoverBackground = style({
  // React prop name and CSS property
  prop: 'dayHoverBackground',
  // CSS property (if different from prop argument)
  cssProperty: 'background',
  // key for theme values
  key: 'dayHoverBackground',
  // accessor function for transforming the value
  transformValue: function(n) {
    return n
  },
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})
var daySelectedHoverBackground = style({
  // React prop name and CSS property
  prop: 'daySelectedHoverBackground',
  // CSS property (if different from prop argument)
  cssProperty: 'background',
  // key for theme values
  key: 'daySelectedHoverBackground',
  // accessor function for transforming the value
  transformValue: function(n) {
    return n
  },
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})
var composeStyledDayStyles = compose(
  boxShadow,
  background,
  color,
  fontFamily,
  fontWeight,
  fontSize,
)
var StyledDay = styled('button')(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      [
        '\n  ',
        '\n  ',
        '\n  ',
        '\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  outline: 0;\n  \n  ',
        '\n  \n  ',
        '\n  \n  &:focus {\n    ',
        '\n  }\n',
      ],
      [
        '\n  ',
        '\n  ',
        '\n  ',
        '\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  outline: 0;\n  \n  ',
        '\n  \n  ',
        '\n  \n  &:focus {\n    ',
        '\n  }\n',
      ],
    )),
  dayHeight,
  dayWidth,
  composeStyledDayStyles,
  function(_a) {
    var disabledDate = _a.disabledDate,
      isSelectedStartOrEnd = _a.isSelectedStartOrEnd
    return (
      disabledDate &&
      !isSelectedStartOrEnd &&
      css(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
            ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
          )),
      )
    )
  },
  function(_a) {
    var disabledDate = _a.disabledDate,
      isSelected = _a.isSelected,
      isSelectedStartOrEnd = _a.isSelectedStartOrEnd,
      isWithinHoverRange = _a.isWithinHoverRange
    if (!disabledDate && !isSelected && !isSelectedStartOrEnd && !isWithinHoverRange) {
      return css(
        templateObject_2 ||
          (templateObject_2 = __makeTemplateObject(
            ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
            ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
          )),
        dayHoverBackground,
        dayHoverColor,
      )
    } else if (isSelected && !isSelectedStartOrEnd) {
      return css(
        templateObject_3 ||
          (templateObject_3 = __makeTemplateObject(
            ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
            ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
          )),
        daySelectedHoverBackground,
        daySelectedHoverColor,
      )
    }
    return ''
  },
  function(_a) {
    var borderAccessibilityColor = _a.borderAccessibilityColor
    return css(
      templateObject_4 ||
        (templateObject_4 = __makeTemplateObject(
          ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
        )),
      borderAccessibilityColor,
    )
  },
)
function getColor(isSelected, isSelectedStartOrEnd, isWithinHoverRange, _a) {
  var selectedFirstOrLast = _a.selectedFirstOrLast,
    normal = _a.normal,
    selected = _a.selected,
    rangeHover = _a.rangeHover
  if (isSelectedStartOrEnd) {
    return selectedFirstOrLast
  } else if (isSelected) {
    return selected
  } else if (isWithinHoverRange) {
    return rangeHover
  } else {
    return normal
  }
}
function Day(_a) {
  var day = _a.day,
    date = _a.date
  var dayRef = useRef(null)
  var _b = useContext(datepickerContext),
    focusedDate = _b.focusedDate,
    isDateFocused = _b.isDateFocused,
    isDateSelected = _b.isDateSelected,
    isDateHovered = _b.isDateHovered,
    isDateBlocked = _b.isDateBlocked,
    isFirstOrLastSelectedDate = _b.isFirstOrLastSelectedDate,
    onDateSelect = _b.onDateSelect,
    onDateFocus = _b.onDateFocus,
    onDateHover = _b.onDateHover,
    onDayRender = _b.onDayRender
  var dayProps = useDay({
    date: date,
    focusedDate: focusedDate,
    isDateFocused: isDateFocused,
    isDateSelected: isDateSelected,
    isDateHovered: isDateHovered,
    isDateBlocked: isDateBlocked,
    isFirstOrLastSelectedDate: isFirstOrLastSelectedDate,
    onDateFocus: onDateFocus,
    onDateSelect: onDateSelect,
    onDateHover: onDateHover,
    dayRef: dayRef,
  })
  var themeContext = useContext(ThemeContext)
  var white = getThemeProp('white', globalStyles.colors.white, themeContext)
  var mud = getThemeProp('mud', globalStyles.colors.mud, themeContext)
  var primaryColor = getThemeProp('primaryColor', globalStyles.colors.primaryColor, themeContext)
  var accessibility = getThemeProp('accessibility', globalStyles.colors.accessibility, themeContext)
  var selectedDay = getThemeProp('selectedDay', globalStyles.colors.selectedDay, themeContext)
  var selectedDayHover = getThemeProp(
    'selectedDayHover',
    globalStyles.colors.selectedDayHover,
    themeContext,
  )
  var normalDayHover = getThemeProp(
    'normalDayHover',
    globalStyles.colors.normalDayHover,
    themeContext,
  )
  var theme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    daySize: globalStyles.daySize,
    dayFontWeight: 500,
    dayFontSize: '14px',
    dayColor: mud,
    dayHoverColor: mud,
    daySelectedColor: white,
    daySelectedHoverColor: white,
    dayHoverRangeColor: white,
    daySelectedFirstOrLastColor: white,
    dayBackground: white,
    dayHoverBackground: normalDayHover,
    daySelectedBackground: selectedDay,
    daySelectedHoverBackground: selectedDayHover,
    dayHoverRangeBackground: selectedDay,
    daySelectedFirstOrLastBackground: primaryColor,
    dayBorderColor: normalDayHover,
    daySelectedBorderColor: selectedDay,
    dayHoverRangeBorderColor: selectedDay,
    daySelectedFirstOrLastBorderColor: primaryColor,
    dayAccessibilityBorderColor: accessibility,
  })
  var borderColor = useMemo(
    function() {
      return getColor(
        dayProps.isSelected,
        dayProps.isSelectedStartOrEnd,
        dayProps.isWithinHoverRange,
        {
          // @ts-ignore
          selectedFirstOrLast: theme.daySelectedFirstOrLastBorderColor,
          // @ts-ignore
          selected: theme.daySelectedBorderColor,
          // @ts-ignore
          normal: theme.dayBorderColor,
          // @ts-ignore
          rangeHover: theme.dayHoverRangeColor,
        },
      )
    },
    [dayProps.isSelected, dayProps.isSelectedStartOrEnd, theme, dayProps.isWithinHoverRange],
  )
  var background = useMemo(
    function() {
      return getColor(
        dayProps.isSelected,
        dayProps.isSelectedStartOrEnd,
        dayProps.isWithinHoverRange,
        {
          // @ts-ignore
          selectedFirstOrLast: theme.daySelectedFirstOrLastBackground,
          // @ts-ignore
          selected: theme.daySelectedBackground,
          // @ts-ignore
          normal: theme.dayBackground,
          // @ts-ignore
          rangeHover: theme.dayHoverRangeBackground,
        },
      )
    },
    [dayProps.isSelected, dayProps.isSelectedStartOrEnd, theme, dayProps.isWithinHoverRange],
  )
  var color = useMemo(
    function() {
      return getColor(
        dayProps.isSelected,
        dayProps.isSelectedStartOrEnd,
        dayProps.isWithinHoverRange,
        {
          // @ts-ignore
          selectedFirstOrLast: theme.daySelectedFirstOrLastColor,
          // @ts-ignore
          selected: theme.daySelectedColor,
          // @ts-ignore
          normal: theme.dayColor,
          // @ts-ignore
          rangeHover: theme.dayHoverRangeColor,
        },
      )
    },
    [dayProps.isSelected, dayProps.isSelectedStartOrEnd, theme, dayProps.isWithinHoverRange],
  )
  return React.createElement(
    StyledDay,
    __assign({}, dayProps, {
      ref: dayRef,
      dayHeight: theme.daySize,
      dayWidth: theme.daySize,
      background: background,
      color: color,
      fontFamily: theme.fontFamily,
      fontWeight: theme.dayFontWeight,
      fontSize: theme.dayFontSize,
      // @ts-ignore
      daySelectedHoverBackground: theme.daySelectedHoverBackground,
      // @ts-ignore
      dayHoverBackground: theme.dayHoverBackground,
      // @ts-ignore
      dayHoverColor: theme.dayHoverColor,
      // @ts-ignore
      daySelectedHoverColor: theme.daySelectedHoverColor,
      // @ts-ignore
      borderAccessibilityColor: theme.dayAccessibilityBorderColor,
      boxShadow:
        '1px 0 0 0 ' +
        borderColor +
        ',\n        0 1px 0 0 ' +
        borderColor +
        ',\n        1px 1px 0 0 ' +
        borderColor +
        ',\n        1px 0 0 0 ' +
        borderColor +
        ' inset,\n        0 1px 0 0 ' +
        borderColor +
        ' inset',
      'data-testid': 'Day',
      'aria-label': 'Day-' + date.toDateString(),
      type: 'button',
    }),
    typeof onDayRender === 'function'
      ? onDayRender(date)
      : React.createElement(
          Flex,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          day,
        ),
  )
}
export default Day
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5
//# sourceMappingURL=Day.js.map
