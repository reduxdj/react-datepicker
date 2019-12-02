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
import React, {useRef, useEffect} from 'react'
import styled, {css, ThemeProvider} from 'styled-components'
import {START_DATE, getInputValue} from '@datepicker-react/hooks'
import {dateSingleInputPhrases} from '../../phrases'
import Box from '../Box'
import Input from '../Input'
import Datepicker from '../Datepicker'
import useThemeProps from '../../hooks/useThemeProps'
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
function getPlacement(placement, rtl) {
  if (placement === 'top' && !rtl) {
    return {
      dateSingleDatepickerWrapperTop: 'unset',
      dateSingleDatepickerWrapperRight: 'unset',
      dateSingleDatepickerWrapperBottom: '65px',
      dateSingleDatepickerWrapperLeft: '0',
    }
  } else if (placement === 'top' && rtl) {
    return {
      dateSingleDatepickerWrapperTop: 'unset',
      dateSingleDatepickerWrapperRight: '0',
      dateSingleDatepickerWrapperBottom: '65px',
      dateSingleDatepickerWrapperLeft: 'unset',
    }
  } else if (placement === 'bottom' && rtl) {
    return {
      dateSingleDatepickerWrapperTop: 'unset',
      dateSingleDatepickerWrapperRight: '0',
      dateSingleDatepickerWrapperBottom: 'unset',
      dateSingleDatepickerWrapperLeft: 'unset',
    }
  }
  return {
    dateSingleDatepickerWrapperTop: 'unset',
    dateSingleDatepickerWrapperRight: 'unset',
    dateSingleDatepickerWrapperBottom: 'unset',
    dateSingleDatepickerWrapperLeft: '0',
  }
}
function DateSingleInput(_a) {
  var date = _a.date,
    minBookingDate = _a.minBookingDate,
    maxBookingDate = _a.maxBookingDate,
    firstDayOfWeek = _a.firstDayOfWeek,
    onFocusChange = _a.onFocusChange,
    showDatepicker = _a.showDatepicker,
    onDateChange = _a.onDateChange,
    dayLabelFormat = _a.dayLabelFormat,
    weekdayLabelFormat = _a.weekdayLabelFormat,
    monthLabelFormat = _a.monthLabelFormat,
    onDayRender = _a.onDayRender,
    _b = _a.numberOfMonths,
    numberOfMonths = _b === void 0 ? 1 : _b,
    _c = _a.showClose,
    showClose = _c === void 0 ? true : _c,
    _d = _a.showResetDate,
    showResetDate = _d === void 0 ? true : _d,
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
    _h = _a.onClose,
    onClose = _h === void 0 ? function() {} : _h,
    _j = _a.showCalendarIcon,
    showCalendarIcon = _j === void 0 ? true : _j,
    _k = _a.displayFormat,
    displayFormat = _k === void 0 ? 'MM/dd/yyyy' : _k,
    _l = _a.phrases,
    phrases = _l === void 0 ? dateSingleInputPhrases : _l,
    _m = _a.placement,
    placement = _m === void 0 ? 'bottom' : _m,
    _o = _a.inputId,
    inputId = _o === void 0 ? 'startDate' : _o
  var ref = useRef(null)
  var datepickerWrapperRef = useRef(null)
  var theme = useThemeProps(
    __assign(
      {
        dateSingleInputPadding: vertical ? (rtl ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
        dateSingleDatepickerWrapperPosition: 'absolute',
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
      showDatepicker &&
      datepickerWrapperRef &&
      datepickerWrapperRef.current &&
      // @ts-ignore
      !datepickerWrapperRef.current.contains(event.target)
    ) {
      onFocusChange(false)
    }
  }
  function handleDatepickerClose() {
    onClose()
    onFocusChange(false)
  }
  function onDatesChange(_a) {
    var focusedInput = _a.focusedInput,
      startDate = _a.startDate
    onDateChange({
      showDatepicker: focusedInput !== null,
      date: startDate,
    })
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
      React.createElement(Input, {
        id: inputId,
        ariaLabel: phrases.dateAriaLabel,
        placeholder: phrases.datePlaceholder,
        value: getInputValue(date, displayFormat, ''),
        onClick: function() {
          return onFocusChange(true)
        },
        showCalendarIcon: showCalendarIcon,
        vertical: vertical,
        isActive: false,
        padding: theme.dateSingleInputPadding,
        rtl: rtl,
        onChange: handleInputChange,
        // @ts-ignore
        dateFormat: displayFormat,
      }),
      React.createElement(
        Box,
        {
          position: theme.dateSingleDatepickerWrapperPosition,
          bottom: theme.dateSingleDatepickerWrapperBottom,
          left: theme.dateSingleDatepickerWrapperLeft,
          top: theme.dateSingleDatepickerWrapperTop,
          right: theme.dateSingleDatepickerWrapperRight,
        },
        showDatepicker &&
          React.createElement(Datepicker, {
            exactMinBookingDays: true,
            minBookingDays: 1,
            onClose: handleDatepickerClose,
            startDate: date,
            endDate: date,
            minBookingDate: minBookingDate,
            maxBookingDate: maxBookingDate,
            firstDayOfWeek: firstDayOfWeek,
            numberOfMonths: numberOfMonths,
            focusedInput: showDatepicker ? START_DATE : null,
            displayFormat: displayFormat,
            onDatesChange: onDatesChange,
            isDateBlocked: isDateBlocked,
            showResetDates: showResetDate,
            vertical: vertical,
            showSelectedDates: false,
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
export default DateSingleInput
var templateObject_1, templateObject_2
//# sourceMappingURL=DateSingleInput.js.map
