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
import React, {useRef, useEffect, useContext} from 'react'
import styled, {css, ThemeContext, ThemeProvider} from 'styled-components'
import {opacity, background, border, borderRadius, color, compose} from 'styled-system'
import {START_DATE, getInputValue, END_DATE} from '@datepicker-react/hooks'
import {dateRangeInputPhrases} from '../../phrases'
import Grid from '../Grid'
import Flex from '../Flex'
import Box from '../Box'
import Input from '../Input'
import ArrowIcon from '../../icons/ArrowIcon'
import Datepicker from '../Datepicker'
import useThemeProps from '../../hooks/useThemeProps'
import getThemeProp from '../../utils/getThemeProp'
import globalStyles from '../../globalStyles'
var Wrapper = styled(Box)(
  templateObject_2 || (templateObject_2 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
  function(_a) {
    var rtl = _a.rtl
    return (
      rtl &&
      css(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            ['\n      direction: rtl;\n    '],
            ['\n      direction: rtl;\n    '],
          )),
      )
    )
  },
)
var composeInputArrowIconStyles = compose(
  color,
  opacity,
)
var InputArrowIcon = styled(ArrowIcon)(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])),
  composeInputArrowIconStyles,
  function(_a) {
    var rtl = _a.rtl
    return (
      rtl &&
      css(
        templateObject_3 ||
          (templateObject_3 = __makeTemplateObject(
            ['\n      transform: rotate(-90deg);\n    '],
            ['\n      transform: rotate(-90deg);\n    '],
          )),
      )
    )
  },
)
var composeInputGridStyles = compose(
  background,
  border,
  borderRadius,
)
var InputGrid = styled(Grid)(
  templateObject_5 || (templateObject_5 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
  composeInputGridStyles,
)
function getPlacement(placement, rtl) {
  if (placement === 'top' && !rtl) {
    return {
      dateRangeDatepickerWrapperTop: 'unset',
      dateRangeDatepickerWrapperRight: 'unset',
      dateRangeDatepickerWrapperBottom: '65px',
      dateRangeDatepickerWrapperLeft: '0',
    }
  } else if (placement === 'top' && rtl) {
    return {
      dateRangeDatepickerWrapperTop: 'unset',
      dateRangeDatepickerWrapperRight: '0',
      dateRangeDatepickerWrapperBottom: '65px',
      dateRangeDatepickerWrapperLeft: 'unset',
    }
  } else if (placement === 'bottom' && rtl) {
    return {
      dateRangeDatepickerWrapperTop: 'unset',
      dateRangeDatepickerWrapperRight: '0',
      dateRangeDatepickerWrapperBottom: 'unset',
      dateRangeDatepickerWrapperLeft: 'unset',
    }
  }
  return {
    dateRangeDatepickerWrapperTop: 'unset',
    dateRangeDatepickerWrapperRight: 'unset',
    dateRangeDatepickerWrapperBottom: 'unset',
    dateRangeDatepickerWrapperLeft: '0',
  }
}
function DateRangeInput(_a) {
  var startDate = _a.startDate,
    endDate = _a.endDate,
    minBookingDate = _a.minBookingDate,
    maxBookingDate = _a.maxBookingDate,
    firstDayOfWeek = _a.firstDayOfWeek,
    onFocusChange = _a.onFocusChange,
    numberOfMonths = _a.numberOfMonths,
    focusedInput = _a.focusedInput,
    onDatesChange = _a.onDatesChange,
    exactMinBookingDays = _a.exactMinBookingDays,
    dayLabelFormat = _a.dayLabelFormat,
    weekdayLabelFormat = _a.weekdayLabelFormat,
    monthLabelFormat = _a.monthLabelFormat,
    onDayRender = _a.onDayRender,
    _b = _a.showClose,
    showClose = _b === void 0 ? true : _b,
    _c = _a.showSelectedDates,
    showSelectedDates = _c === void 0 ? true : _c,
    _d = _a.showResetDates,
    showResetDates = _d === void 0 ? true : _d,
    _e = _a.vertical,
    vertical = _e === void 0 ? false : _e,
    _f = _a.rtl,
    rtl = _f === void 0 ? false : _f,
    _g = _a.isDateBlocked,
    isDateBlocked =
      _g === void 0
        ? function() {
            return false
          }
        : _g,
    _h = _a.minBookingDays,
    minBookingDays = _h === void 0 ? 1 : _h,
    _j = _a.onClose,
    onClose = _j === void 0 ? function() {} : _j,
    _k = _a.showStartDateCalendarIcon,
    showStartDateCalendarIcon = _k === void 0 ? true : _k,
    _l = _a.showEndDateCalendarIcon,
    showEndDateCalendarIcon = _l === void 0 ? true : _l,
    _m = _a.displayFormat,
    displayFormat = _m === void 0 ? 'MM/dd/yyyy' : _m,
    _o = _a.phrases,
    phrases = _o === void 0 ? dateRangeInputPhrases : _o,
    _p = _a.placement,
    placement = _p === void 0 ? 'bottom' : _p,
    _q = _a.startDateInputId,
    startDateInputId = _q === void 0 ? 'startDate' : _q,
    _r = _a.endDateInputId,
    endDateInputId = _r === void 0 ? 'endDate' : _r
  var ref = useRef(null)
  var datepickerWrapperRef = useRef(null)
  var themeContext = useContext(ThemeContext)
  var theme = useThemeProps(
    __assign(
      {
        dateRangeBackground: 'transparent',
        dateRangeGridTemplateColumns: vertical ? '1fr 24px 1fr' : '194px 39px 194px',
        dateRangeGridTemplateRows: 'unset',
        dateRangeBorder: '0',
        dateRangeBorderRadius: '0',
        dateRangeArrowIconWidth: '15px',
        dateRangeArrowIconHeight: '12px',
        dateRangeArrowIconColor: getThemeProp('graci', globalStyles.colors.graci, themeContext),
        dateRangeArrowIconOpacity: 1,
        dateRangeStartDateInputPadding: vertical
          ? rtl
            ? '0 32px 0 8px'
            : '0 8px 0 32px'
          : '0 44px',
        dateRangeEndDateInputPadding: vertical ? (rtl ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
        dateRangeDatepickerWrapperPosition: 'absolute',
      },
      getPlacement(placement, rtl),
    ),
  )
  useEffect(function() {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', onClickOutsideHandler)
    }
    return function() {
      window.removeEventListener('click', onClickOutsideHandler)
    }
  })
  function onClickOutsideHandler(event) {
    if (
      focusedInput !== null &&
      datepickerWrapperRef &&
      datepickerWrapperRef.current &&
      // @ts-ignore
      !datepickerWrapperRef.current.contains(event.target)
    ) {
      onFocusChange(null)
    }
  }
  function handleDatepickerClose() {
    onClose()
    onFocusChange(null)
  }
  function handleInputChange(date) {
    // @ts-ignore
    if (ref && ref.current && ref.current.onDateSelect) {
      // @ts-ignore
      ref.current.onDateSelect(date)
    }
  }
  return React.createElement(
    ThemeProvider,
    {
      theme: function(theme) {
        return theme || {}
      },
    },
    React.createElement(
      Wrapper,
      {rtl: rtl, position: 'relative', ref: datepickerWrapperRef},
      React.createElement(
        InputGrid,
        {
          'data-testid': 'DateRangeInputGrid',
          background: theme.dateRangeBackground,
          gridTemplateColumns: theme.dateRangeGridTemplateColumns,
          gridTemplateRows: theme.dateRangeGridTemplateRows,
          border: theme.dateRangeBorder,
          borderRadius: theme.dateRangeBorderRadius,
        },
        React.createElement(Input, {
          id: startDateInputId,
          ariaLabel: phrases.startDateAriaLabel,
          placeholder: phrases.startDatePlaceholder,
          value: getInputValue(startDate, displayFormat, ''),
          onClick: function() {
            return onFocusChange(START_DATE)
          },
          showCalendarIcon: showStartDateCalendarIcon,
          vertical: vertical,
          isActive: focusedInput === START_DATE,
          padding: theme.dateRangeStartDateInputPadding,
          rtl: rtl,
          onChange: handleInputChange,
          // @ts-ignore
          dateFormat: displayFormat,
        }),
        React.createElement(
          Flex,
          {alignItems: 'center', justifyContent: 'center'},
          React.createElement(
            InputArrowIcon,
            // @ts-ignore
            {
              // @ts-ignore
              width: theme.dateRangeArrowIconWidth,
              // @ts-ignore
              height: theme.dateRangeArrowIconHeight,
              color: theme.dateRangeArrowIconColor,
              opacity: theme.dateRangeArrowIconOpacity,
              rtl: rtl,
            },
          ),
        ),
        React.createElement(Input, {
          id: endDateInputId,
          ariaLabel: phrases.endDateAriaLabel,
          placeholder: phrases.endDatePlaceholder,
          value: getInputValue(endDate, displayFormat, ''),
          onClick: function() {
            return onFocusChange(!startDate ? START_DATE : END_DATE)
          },
          showCalendarIcon: showEndDateCalendarIcon,
          vertical: vertical,
          isActive: focusedInput === END_DATE,
          padding: theme.dateRangeEndDateInputPadding,
          rtl: rtl,
          disableAccessibility: focusedInput === START_DATE,
          onChange: handleInputChange,
          // @ts-ignore
          dateFormat: displayFormat,
        }),
      ),
      React.createElement(
        Box,
        {
          position: theme.dateRangeDatepickerWrapperPosition,
          bottom: theme.dateRangeDatepickerWrapperBottom,
          left: theme.dateRangeDatepickerWrapperLeft,
          top: theme.dateRangeDatepickerWrapperTop,
          right: theme.dateRangeDatepickerWrapperRight,
        },
        focusedInput !== null &&
          React.createElement(Datepicker, {
            onClose: handleDatepickerClose,
            startDate: startDate,
            endDate: endDate,
            minBookingDate: minBookingDate,
            maxBookingDate: maxBookingDate,
            firstDayOfWeek: firstDayOfWeek,
            numberOfMonths: numberOfMonths,
            focusedInput: focusedInput,
            displayFormat: displayFormat,
            onDatesChange: onDatesChange,
            minBookingDays: minBookingDays,
            isDateBlocked: isDateBlocked,
            exactMinBookingDays: exactMinBookingDays,
            showResetDates: showResetDates,
            vertical: vertical,
            showSelectedDates: showSelectedDates,
            showClose: showClose,
            rtl: rtl,
            dayLabelFormat: dayLabelFormat,
            weekdayLabelFormat: weekdayLabelFormat,
            monthLabelFormat: monthLabelFormat,
            onDayRender: onDayRender,
            phrases: phrases,
            ref: ref,
          }),
      ),
    ),
  )
}
export default DateRangeInput
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5
//# sourceMappingURL=DateRangeInput.js.map
