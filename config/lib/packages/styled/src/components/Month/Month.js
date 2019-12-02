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
import {useMonth} from '@datepicker-react/hooks'
import styled, {keyframes} from 'styled-components'
import MonthLabel from '../MonthLabel'
import DayLabel from '../DayLabel'
import Flex from '../Flex'
import Grid from '../Grid'
import Day from '../Day'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
var opacity0To100 = keyframes(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
    )),
)
var MonthWrapper = styled('div')(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  animation-name: ',
        ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
      ],
      [
        '\n  animation-name: ',
        ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
      ],
    )),
  opacity0To100,
)
var Month = function(_a) {
  var year = _a.year,
    month = _a.month,
    firstDayOfWeek = _a.firstDayOfWeek,
    dayLabelFormat = _a.dayLabelFormat,
    monthLabelFormat = _a.monthLabelFormat,
    weekdayLabelFormat = _a.weekdayLabelFormat
  var _b = useMonth({
      dayLabelFormat: dayLabelFormat,
      monthLabelFormat: monthLabelFormat,
      weekdayLabelFormat: weekdayLabelFormat,
      year: year,
      month: month,
      firstDayOfWeek: firstDayOfWeek,
    }),
    days = _b.days,
    weekdayLabels = _b.weekdayLabels,
    monthLabel = _b.monthLabel
  var theme = useThemeProps({
    daySize: globalStyles.daySize,
    monthLabelMargin: '0 0 28px',
    monthDayLabelMargin: '0 0 16px',
  })
  return React.createElement(
    MonthWrapper,
    null,
    React.createElement(
      Flex,
      {justifyContent: 'center', m: theme.monthLabelMargin},
      React.createElement(MonthLabel, {label: monthLabel}),
    ),
    React.createElement(
      Grid,
      {daySizeGridTemplateColumns: theme.daySize},
      weekdayLabels.map(function(weekdayLabel) {
        return React.createElement(
          Flex,
          {key: weekdayLabel, justifyContent: 'center', m: theme.monthDayLabelMargin},
          React.createElement(DayLabel, {label: weekdayLabel}),
        )
      }),
    ),
    React.createElement(
      Grid,
      {daySizeGridTemplateColumns: theme.daySize},
      days.map(function(day, index) {
        if (typeof day === 'object') {
          return React.createElement(Day, {date: day.date, key: day.dayLabel, day: day.dayLabel})
        }
        return React.createElement('div', {key: index})
      }),
    ),
  )
}
export default Month
var templateObject_1, templateObject_2
//# sourceMappingURL=Month.js.map
