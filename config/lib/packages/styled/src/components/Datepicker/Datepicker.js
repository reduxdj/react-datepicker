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
import React, {useRef, useContext, useImperativeHandle} from 'react'
import styled, {css, keyframes, ThemeContext, ThemeProvider} from 'styled-components'
import {
  background,
  space,
  borderRadius,
  position,
  boxShadow,
  display,
  justifyContent,
  overflow,
  height,
  width,
  compose,
} from 'styled-system'
import {
  useDatepicker,
  getInputValue,
  START_DATE,
  END_DATE,
  dayLabelFormat as dayLabelFormatFn,
  weekdayLabelFormat as weekdayLabelFormatFn,
  monthLabelFormat as monthLabelFormatFn,
} from '@datepicker-react/hooks'
import {datepickerPhrases} from '../../phrases'
import SelectedDate from '../SelectedDate'
import Grid from '../Grid'
import Flex from '../Flex'
import Month from '../Month'
import Box from '../Box'
import ResetDates from '../ResetDates'
import NavButton from '../NavButton'
import Close from '../Close'
import ArrowIcon from '../../icons/ArrowIcon'
import DatepickerContext from '../../context/datepickerContext'
import useThemeProps from '../../hooks/useThemeProps'
import globalStyles from '../../globalStyles'
import getThemeProp from '../../utils/getThemeProp'
var opacity0To100 = keyframes(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
    )),
)
var composeStyledDatepickerStyles = compose(
  background,
  space,
  borderRadius,
  position,
  boxShadow,
  width,
)
var StyledDatepicker = styled('div')(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  ',
        '\n  ',
        '\n  \n  animation-name: ',
        ';\n  animation-duration: 0.15s;\n  animation-timing-function: ease-in;\n',
      ],
      [
        '\n  ',
        '\n  ',
        '\n  \n  animation-name: ',
        ';\n  animation-duration: 0.15s;\n  animation-timing-function: ease-in;\n',
      ],
    )),
  composeStyledDatepickerStyles,
  function(_a) {
    var rtl = _a.rtl
    return (
      rtl &&
      css(
        templateObject_2 ||
          (templateObject_2 = __makeTemplateObject(
            ['\n      direction: rtl;\n    '],
            ['\n      direction: rtl;\n    '],
          )),
      )
    )
  },
  opacity0To100,
)
var DateWrapper = styled('div')(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
      ],
      [
        "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
      ],
    )),
)
var composeCloseWrapperStyles = compose(
  display,
  justifyContent,
)
var CloseWrapper = styled(Box)(
  templateObject_5 || (templateObject_5 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
  composeCloseWrapperStyles,
)
var composeMonthGridStyles = compose(
  overflow,
  height,
)
var MonthGrid = styled(Grid)(
  templateObject_6 || (templateObject_6 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
  composeMonthGridStyles,
)
function Datepicker(_a, ref) {
  var startDate = _a.startDate,
    endDate = _a.endDate,
    minBookingDate = _a.minBookingDate,
    maxBookingDate = _a.maxBookingDate,
    focusedInput = _a.focusedInput,
    onDatesChange = _a.onDatesChange,
    dayLabelFormat = _a.dayLabelFormat,
    weekdayLabelFormat = _a.weekdayLabelFormat,
    monthLabelFormat = _a.monthLabelFormat,
    onDayRender = _a.onDayRender,
    _b = _a.vertical,
    vertical = _b === void 0 ? false : _b,
    _c = _a.rtl,
    rtl = _c === void 0 ? false : _c,
    _d = _a.showResetDates,
    showResetDates = _d === void 0 ? true : _d,
    _e = _a.showClose,
    showClose = _e === void 0 ? true : _e,
    _f = _a.showSelectedDates,
    showSelectedDates = _f === void 0 ? true : _f,
    _g = _a.exactMinBookingDays,
    exactMinBookingDays = _g === void 0 ? false : _g,
    _h = _a.isDateBlocked,
    isDateBlocked =
      _h === void 0
        ? function() {
            return false
          }
        : _h,
    _j = _a.minBookingDays,
    minBookingDays = _j === void 0 ? 1 : _j,
    _k = _a.onClose,
    onClose = _k === void 0 ? function() {} : _k,
    numberOfMonthsProp = _a.numberOfMonths,
    firstDayOfWeekProp = _a.firstDayOfWeek,
    _l = _a.displayFormat,
    displayFormat = _l === void 0 ? 'MM/dd/yyyy' : _l,
    _m = _a.phrases,
    phrases = _m === void 0 ? datepickerPhrases : _m
  var _o = useDatepicker({
      startDate: startDate,
      endDate: endDate,
      focusedInput: focusedInput,
      onDatesChange: onDatesChange,
      minBookingDate: minBookingDate,
      maxBookingDate: maxBookingDate,
      minBookingDays: minBookingDays,
      isDateBlocked: isDateBlocked,
      exactMinBookingDays: exactMinBookingDays,
      numberOfMonths: numberOfMonthsProp,
      firstDayOfWeek: firstDayOfWeekProp,
    }),
    activeMonths = _o.activeMonths,
    isDateSelected = _o.isDateSelected,
    isFirstOrLastSelectedDate = _o.isFirstOrLastSelectedDate,
    isDateHovered = _o.isDateHovered,
    firstDayOfWeek = _o.firstDayOfWeek,
    onDateSelect = _o.onDateSelect,
    onResetDates = _o.onResetDates,
    goToPreviousMonths = _o.goToPreviousMonths,
    goToNextMonths = _o.goToNextMonths,
    numberOfMonths = _o.numberOfMonths,
    hoveredDate = _o.hoveredDate,
    onDateHover = _o.onDateHover,
    isDateFocused = _o.isDateFocused,
    focusedDate = _o.focusedDate,
    onDateFocus = _o.onDateFocus,
    isDateBlockedFn = _o.isDateBlocked
  useImperativeHandle(ref, function() {
    return {
      onDateSelect: function(date) {
        onDateSelect(date)
      },
    }
  })
  var monthGridRef = useRef(null)
  var themeContext = useContext(ThemeContext)
  var theme = useThemeProps({
    datepickerBackground: '#ffffff',
    datepickerPadding: vertical ? '16px 16px 0' : '32px',
    datepickerBorderRadius: '2px',
    datepickerPosition: 'relative',
    datepickerWidth: 'fit-content',
    datepickerCloseWrapperPosition: vertical ? 'relative' : 'absolute',
    datepickerCloseWrapperDisplay: vertical ? 'flex' : 'block',
    datepickerCloseWrapperJustifyContent: vertical ? 'flex-end' : 'initial',
    datepickerCloseWrapperMargin: vertical ? '0 0 16px' : '0',
    datepickerCloseWrapperRight: rtl ? 'unset' : vertical ? '0' : '32px',
    datepickerCloseWrapperTop: 'unset',
    datepickerCloseWrapperLeft: rtl ? '32px' : 'unset',
    datepickerCloseWrapperBottom: 'unset',
    datepickerCloseWrapperZIndex: 1,
    datepickerSelectDateGridTemplateColumns: vertical ? '87px 50px 87px' : '126px 75px 126px',
    datepickerSelectDateGridTemplateRows: 'unset',
    datepickerSelectDateArrowIconWidth: '15px',
    datepickerSelectDateArrowIconHeight: '12px',
    datepickerSelectDateArrowIconColor: getThemeProp(
      'silverCloud',
      globalStyles.colors.silverCloud,
      themeContext,
    ),
    datepickerMonthsWrapperMargin:
      !showClose && !showSelectedDates ? 'unset' : !showSelectedDates ? '48px 0 0' : '28px 0 0',
    datepickerPreviousMonthButtonPosition: vertical ? 'relative' : 'absolute',
    datepickerPreviousMonthButtonTop: vertical ? 'unset' : '-5px',
    datepickerPreviousMonthButtonLeft: vertical ? 'unset' : '0',
    datepickerPreviousMonthButtonRight: 'unset',
    datepickerPreviousMonthButtonBottom: 'unset',
    datepickerNextMonthButtonPosition: vertical ? 'relative' : 'absolute',
    datepickerNextMonthButtonTop: vertical ? 'unset' : '-5px',
    datepickerNextMonthButtonLeft: 'unset',
    datepickerNextMonthButtonRight: vertical ? 'unset' : '0',
    datepickerNextMonthButtonBottom: 'unset',
    datepickerMonthsGridGap: vertical ? '32px' : '0 32px',
    datepickerMonthsGridOverflow: 'auto',
    datepickerMonthsGridHeight: vertical ? '50vh' : '100%',
    datepickerResetDatesWrapperMargin: vertical ? 'unset' : '32px 0 0',
    datepickerBoxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px',
  })
  function scrollTopToMonthGrid() {
    if (monthGridRef && monthGridRef.current && vertical) {
      monthGridRef.current.scrollTop = 0
    }
  }
  function handleGoToNextMonth() {
    goToNextMonths()
    scrollTopToMonthGrid()
  }
  function handleGoToPreviousMonth() {
    goToPreviousMonths()
    scrollTopToMonthGrid()
  }
  return React.createElement(
    ThemeProvider,
    {
      theme: function(theme) {
        return theme || {}
      },
    },
    React.createElement(
      DatepickerContext.Provider,
      {
        value: {
          rtl: rtl,
          isDateFocused: isDateFocused,
          isDateSelected: isDateSelected,
          isDateHovered: isDateHovered,
          isFirstOrLastSelectedDate: isFirstOrLastSelectedDate,
          onDateFocus: onDateFocus,
          focusedDate: focusedDate,
          onDateSelect: onDateSelect,
          onDateHover: onDateHover,
          onDayRender: onDayRender,
          isDateBlocked: isDateBlockedFn,
        },
      },
      React.createElement(
        StyledDatepicker,
        {
          background: theme.datepickerBackground,
          p: theme.datepickerPadding,
          borderRadius: theme.datepickerBorderRadius,
          position: theme.datepickerPosition,
          boxShadow: theme.datepickerBoxShadow,
          width: theme.datepickerWidth,
          rtl: rtl,
        },
        showClose &&
          React.createElement(
            CloseWrapper,
            {
              m: theme.datepickerCloseWrapperMargin,
              display: theme.datepickerCloseWrapperDisplay,
              justifyContent: theme.datepickerCloseWrapperJustifyContent,
              position: theme.datepickerCloseWrapperPosition,
              right: theme.datepickerCloseWrapperRight,
              top: theme.datepickerCloseWrapperTop,
              left: theme.datepickerCloseWrapperLeft,
              bottom: theme.datepickerCloseWrapperBottom,
              zIndex: theme.datepickerCloseWrapperZIndex,
            },
            React.createElement(Close, {onClick: onClose, rtl: rtl, closeText: phrases.close}),
          ),
        showSelectedDates &&
          React.createElement(
            DateWrapper,
            null,
            React.createElement(
              Grid,
              {
                'data-testid': 'SelectedDatesGrid',
                gridTemplateColumns: theme.datepickerSelectDateGridTemplateColumns,
                gridTemplateRows: theme.datepickerSelectDateGridTemplateRows,
              },
              React.createElement(SelectedDate, {
                title: phrases.datepickerStartDateLabel,
                date: getInputValue(
                  startDate,
                  displayFormat,
                  phrases.datepickerStartDatePlaceholder,
                ),
                isActive: focusedInput === START_DATE,
                vertical: vertical,
              }),
              React.createElement(
                Flex,
                {justifyContent: 'center', alignItems: 'center'},
                React.createElement(
                  ArrowIcon,
                  // @ts-ignore
                  {
                    // @ts-ignore
                    height: theme.datepickerSelectDateArrowIconHeight,
                    // @ts-ignore
                    width: theme.datepickerSelectDateArrowIconWidth,
                    // @ts-ignore
                    iconColor: theme.datepickerSelectDateArrowIconColor,
                  },
                ),
              ),
              React.createElement(SelectedDate, {
                title: phrases.datepickerEndDateLabel,
                date: getInputValue(endDate, displayFormat, phrases.datepickerEndDatePlaceholder),
                isActive: focusedInput === END_DATE,
                vertical: vertical,
              }),
            ),
          ),
        React.createElement(
          Box,
          {position: 'relative'},
          React.createElement(
            Box,
            {m: theme.datepickerMonthsWrapperMargin},
            React.createElement(
              MonthGrid,
              {
                'data-testid': 'MonthGrid',
                overflow: theme.datepickerMonthsGridOverflow,
                height: theme.datepickerMonthsGridHeight,
                gridTemplateColumns: vertical ? '1fr' : 'repeat(' + numberOfMonths + ', 1fr)',
                gridGap: theme.datepickerMonthsGridGap,
                pr: rtl ? '1px' : '0',
                ref: monthGridRef,
                onMouseLeave: function() {
                  if (hoveredDate) {
                    onDateHover(null)
                  }
                },
              },
              activeMonths.map(function(month) {
                return React.createElement(Month, {
                  key: 'month-' + month.year + '-' + month.month,
                  year: month.year,
                  month: month.month,
                  firstDayOfWeek: firstDayOfWeek,
                  dayLabelFormat: dayLabelFormat || dayLabelFormatFn,
                  weekdayLabelFormat: weekdayLabelFormat || weekdayLabelFormatFn,
                  monthLabelFormat: monthLabelFormat || monthLabelFormatFn,
                })
              }),
            ),
          ),
          React.createElement(
            Flex,
            {alignItems: 'center'},
            React.createElement(
              React.Fragment,
              null,
              showResetDates &&
                React.createElement(
                  Flex,
                  {flex: '1', m: theme.datepickerResetDatesWrapperMargin},
                  React.createElement(ResetDates, {
                    rtl: rtl,
                    onResetDates: onResetDates,
                    text: phrases.resetDates,
                  }),
                ),
              React.createElement(
                Box,
                {
                  position: theme.datepickerPreviousMonthButtonPosition,
                  top: theme.datepickerPreviousMonthButtonTop,
                  left: theme.datepickerPreviousMonthButtonLeft,
                  right: theme.datepickerPreviousMonthButtonRight,
                  bottom: theme.datepickerPreviousMonthButtonBottom,
                },
                React.createElement(NavButton, {
                  type: 'prev',
                  onClick: rtl && !vertical ? handleGoToNextMonth : handleGoToPreviousMonth,
                  vertical: vertical,
                  rtl: rtl,
                  ariaLabel: 'Previous month',
                }),
              ),
              React.createElement(
                Box,
                {
                  position: theme.datepickerNextMonthButtonPosition,
                  top: theme.datepickerNextMonthButtonTop,
                  left: theme.datepickerNextMonthButtonLeft,
                  right: theme.datepickerNextMonthButtonRight,
                  bottom: theme.datepickerNextMonthButtonBottom,
                },
                React.createElement(NavButton, {
                  type: 'next',
                  onClick: rtl && !vertical ? handleGoToPreviousMonth : handleGoToNextMonth,
                  vertical: vertical,
                  rtl: rtl,
                  ariaLabel: 'Next month',
                }),
              ),
            ),
          ),
        ),
      ),
    ),
  )
}
export default React.forwardRef(Datepicker)
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6
//# sourceMappingURL=Datepicker.js.map
