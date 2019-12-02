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
import React, {useReducer} from 'react'
import {ThemeProvider} from 'styled-components'
import {addDays, isSameDay, format} from 'date-fns'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {text, boolean} from '@storybook/addon-knobs'
import {
  dayLabelFormat as dayLabelFormatFn,
  weekdayLabelFormat as weekdayLabelFormatFn,
  monthLabelFormat as monthLabelFormatFn,
} from '@datepicker-react/hooks'
import {es as locale} from 'date-fns/locale'
import Flex from '../Flex'
import {DateSingleInput, dateSingleInputPhrases} from '../../index'
var initialState = {
  date: null,
  showDatepicker: false,
}
function reducer(state, action) {
  switch (action.type) {
    case 'focusChange':
      return __assign({}, state, {showDatepicker: action.payload})
    case 'dateChange':
      return action.payload
    default:
      throw new Error()
  }
}
function App(_a) {
  var _b = _a.displayFormat,
    displayFormat = _b === void 0 ? 'MM/dd/yyyy' : _b,
    _c = _a.showClose,
    showClose = _c === void 0 ? true : _c,
    _d = _a.showResetDate,
    showResetDate = _d === void 0 ? false : _d,
    _e = _a.vertical,
    vertical = _e === void 0 ? false : _e,
    _f = _a.rtl,
    rtl = _f === void 0 ? false : _f,
    _g = _a.numberOfMonths,
    numberOfMonths = _g === void 0 ? 1 : _g,
    _h = _a.firstDayOfWeek,
    firstDayOfWeek = _h === void 0 ? 1 : _h,
    _j = _a.phrasesProp,
    phrasesProp = _j === void 0 ? dateSingleInputPhrases : _j,
    _k = _a.isDateBlocked,
    isDateBlocked =
      _k === void 0
        ? function() {
            return false
          }
        : _k,
    minBookingDate = _a.minBookingDate,
    maxBookingDate = _a.maxBookingDate,
    _l = _a.dayLabelFormat,
    dayLabelFormat = _l === void 0 ? dayLabelFormatFn : _l,
    _m = _a.weekdayLabelFormat,
    weekdayLabelFormat = _m === void 0 ? weekdayLabelFormatFn : _m,
    _o = _a.monthLabelFormat,
    monthLabelFormat = _o === void 0 ? monthLabelFormatFn : _o,
    _p = _a.onDayRender,
    onDayRender = _p === void 0 ? undefined : _p
  var _q = useReducer(reducer, initialState),
    state = _q[0],
    dispatch = _q[1]
  return React.createElement(
    'div',
    {style: {width: '350px'}},
    React.createElement(DateSingleInput, {
      minBookingDate: minBookingDate,
      maxBookingDate: maxBookingDate,
      onDateChange: function(data) {
        return dispatch({type: 'dateChange', payload: data})
      },
      onFocusChange: function(focusedInput) {
        return dispatch({type: 'focusChange', payload: focusedInput})
      },
      // @ts-ignore
      date: state.date,
      // @ts-ignore
      showDatepicker: state.showDatepicker,
      onClose: action('onClose'),
      displayFormat: displayFormat,
      vertical: vertical,
      rtl: rtl,
      showClose: showClose,
      showResetDate: showResetDate,
      numberOfMonths: numberOfMonths,
      firstDayOfWeek: firstDayOfWeek,
      phrases: phrasesProp,
      isDateBlocked: isDateBlocked,
      dayLabelFormat: dayLabelFormat,
      weekdayLabelFormat: weekdayLabelFormat,
      monthLabelFormat: monthLabelFormat,
      onDayRender: onDayRender,
    }),
  )
}
storiesOf('DateSingleInput', module)
  .add('Simple demo', function() {
    return React.createElement(App, {
      rtl: boolean('rtl', false),
      vertical: boolean('vertical', false),
      showResetDate: boolean('showResetDate', true),
      showClose: boolean('showClose', true),
      displayFormat: text('displayFormat', 'MM/dd/yyyy'),
    })
  })
  .add('Number of months (3 months)', function() {
    return React.createElement(App, {
      rtl: boolean('rtl', false),
      vertical: boolean('vertical', false),
      showResetDate: boolean('showResetDate', true),
      showClose: boolean('showClose', true),
      displayFormat: text('displayFormat', 'MM/dd/yyyy'),
      numberOfMonths: 3,
    })
  })
  .add('First day of the week (Sunday)', function() {
    return React.createElement(App, {
      rtl: boolean('rtl', false),
      vertical: boolean('vertical', false),
      showResetDate: boolean('showResetDate', true),
      showClose: boolean('showClose', true),
      displayFormat: text('displayFormat', 'MM/dd/yyyy'),
      firstDayOfWeek: 0,
    })
  })
  .add('Custom phrases', function() {
    return React.createElement(App, {
      rtl: boolean('rtl', false),
      vertical: boolean('vertical', false),
      showResetDate: boolean('showResetDate', true),
      showClose: boolean('showClose', true),
      displayFormat: text('displayFormat', 'MM/dd/yyyy'),
      firstDayOfWeek: 0,
      phrasesProp: {
        datepickerStartDatePlaceholder: 'Seleccionar',
        datepickerStartDateLabel: 'Fecha de inicio:',
        datepickerEndDatePlaceholder: 'Seleccionar',
        datepickerEndDateLabel: 'Fecha de inicio:',
        resetDates: 'Deshacer',
        dateAriaLabel: 'Seleccione fecha',
        datePlaceholder: 'Seleccione fecha',
        close: 'Cerca',
      },
    })
  })
  .add('Localization', function() {
    return React.createElement(App, {
      rtl: boolean('rtl', false),
      vertical: boolean('vertical', false),
      showResetDate: boolean('showResetDate', true),
      showClose: boolean('showClose', true),
      displayFormat: text('displayFormat', 'MM/dd/yyyy'),
      firstDayOfWeek: 0,
      phrasesProp: {
        datepickerStartDatePlaceholder: 'Seleccionar',
        datepickerStartDateLabel: 'Fecha de inicio:',
        datepickerEndDatePlaceholder: 'Seleccionar',
        datepickerEndDateLabel: 'Fecha de inicio:',
        resetDates: 'Deshacer',
        dateAriaLabel: 'Seleccione fecha',
        datePlaceholder: 'Seleccione fecha',
        close: 'Cerca',
      },
      dayLabelFormat: function(date) {
        return format(date, 'dd', {locale: locale})
      },
      weekdayLabelFormat: function(date) {
        return format(date, 'eeeeee', {locale: locale})
      },
      monthLabelFormat: function(date) {
        return format(date, 'MMMM yyyy', {locale: locale})
      },
    })
  })
  .add('Block date', function() {
    return React.createElement(App, {
      rtl: boolean('rtl', false),
      vertical: boolean('vertical', false),
      showResetDate: boolean('showResetDate', true),
      showClose: boolean('showClose', true),
      displayFormat: text('displayFormat', 'MM/dd/yyyy'),
      firstDayOfWeek: 0,
      isDateBlocked: function(date) {
        return isSameDay(date, addDays(new Date(), 1))
      },
    })
  })
  .add('Custom day size', function() {
    return React.createElement(
      ThemeProvider,
      {
        theme: {
          reactDatepicker: {
            daySize: 40,
          },
        },
      },
      React.createElement(App, {
        rtl: boolean('rtl', false),
        vertical: boolean('vertical', false),
        showResetDate: boolean('showResetDate', true),
        showClose: boolean('showClose', true),
        displayFormat: text('displayFormat', 'MM/dd/yyyy'),
        firstDayOfWeek: 0,
        isDateBlocked: function(date) {
          return isSameDay(date, addDays(new Date(), 1))
        },
      }),
    )
  })
  .add('MinBookingDate and maxBookingDate', function() {
    return React.createElement(
      ThemeProvider,
      {
        theme: {
          reactDatepicker: {
            daySize: 40,
          },
        },
      },
      React.createElement(App, {
        minBookingDate: new Date(),
        maxBookingDate: addDays(new Date(), 20),
        rtl: boolean('rtl', false),
        vertical: boolean('vertical', false),
        showResetDate: boolean('showResetDate', true),
        showClose: boolean('showClose', true),
        displayFormat: text('displayFormat', 'MM/dd/yyyy'),
        firstDayOfWeek: 0,
        isDateBlocked: function(date) {
          return isSameDay(date, addDays(new Date(), 1))
        },
      }),
    )
  })
  .add('Custom day render', function() {
    return React.createElement(
      ThemeProvider,
      {
        theme: {
          reactDatepicker: {
            daySize: 50,
          },
        },
      },
      React.createElement(App, {
        rtl: boolean('rtl', false),
        vertical: boolean('vertical', false),
        showResetDate: boolean('showResetDate', true),
        showClose: boolean('showClose', true),
        displayFormat: text('displayFormat', 'MM/dd/yyyy'),
        onDayRender: function(date) {
          return React.createElement(
            Flex,
            {alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'},
            dayLabelFormatFn(date),
            '\uD83D\uDE1C',
          )
        },
      }),
    )
  })
  .add('Theming', function() {
    return React.createElement(
      ThemeProvider,
      {
        theme: {
          reactDatepicker: {
            fontFamily: 'system-ui, -apple-system',
            colors: {
              accessibility: '#D80249',
              selectedDay: '#f7518b',
              selectedDayHover: '#F75D95',
              primaryColor: '#d8366f',
            },
          },
        },
      },
      React.createElement(App, {
        rtl: boolean('rtl', false),
        vertical: boolean('vertical', false),
        showResetDate: boolean('showResetDate', true),
        showClose: boolean('showClose', true),
        displayFormat: text('displayFormat', 'MM/dd/yyyy'),
      }),
    )
  })
//# sourceMappingURL=DateSingleInput.stories.js.map
