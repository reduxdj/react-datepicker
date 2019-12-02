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
import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {format, addDays, isSameDay} from 'date-fns'
import {
  dayLabelFormat as dayLabelFormatFn,
  weekdayLabelFormat as weekdayLabelFormatFn,
  monthLabelFormat as monthLabelFormatFn,
} from '@datepicker-react/hooks'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {text, boolean} from '@storybook/addon-knobs'
import {es as locale} from 'date-fns/locale'
import {Datepicker, START_DATE, datepickerPhrases} from '../../index'
import Flex from '../Flex'
function App(_a) {
  var _b = _a.displayFormat,
    displayFormat = _b === void 0 ? 'MM/DD/YYYY' : _b,
    _c = _a.showClose,
    showClose = _c === void 0 ? true : _c,
    _d = _a.showSelectedDates,
    showSelectedDates = _d === void 0 ? true : _d,
    _e = _a.showResetDates,
    showResetDates = _e === void 0 ? false : _e,
    _f = _a.vertical,
    vertical = _f === void 0 ? false : _f,
    _g = _a.rtl,
    rtl = _g === void 0 ? false : _g,
    _h = _a.exactMinBookingDays,
    exactMinBookingDays = _h === void 0 ? false : _h,
    _j = _a.minBookingDays,
    minBookingDays = _j === void 0 ? 1 : _j,
    _k = _a.numberOfMonths,
    numberOfMonths = _k === void 0 ? 2 : _k,
    _l = _a.firstDayOfWeek,
    firstDayOfWeek = _l === void 0 ? 1 : _l,
    _m = _a.phrasesProp,
    phrasesProp = _m === void 0 ? datepickerPhrases : _m,
    _o = _a.isDateBlocked,
    isDateBlocked =
      _o === void 0
        ? function() {
            return false
          }
        : _o,
    minBookingDate = _a.minBookingDate,
    maxBookingDate = _a.maxBookingDate,
    _p = _a.dayLabelFormat,
    dayLabelFormat = _p === void 0 ? dayLabelFormatFn : _p,
    _q = _a.weekdayLabelFormat,
    weekdayLabelFormat = _q === void 0 ? weekdayLabelFormatFn : _q,
    _r = _a.monthLabelFormat,
    monthLabelFormat = _r === void 0 ? monthLabelFormatFn : _r,
    _s = _a.onDayRender,
    onDayRender = _s === void 0 ? undefined : _s
  var _t = useState({
      startDate: null,
      endDate: null,
      focusedInput: START_DATE,
    }),
    state = _t[0],
    setState = _t[1]
  function handleDataChange(data) {
    action('onDatesChange')(data)
    if (!data.focusedInput) {
      setState(__assign({}, data, {focusedInput: START_DATE}))
    } else {
      setState(data)
    }
  }
  return React.createElement(Datepicker, {
    minBookingDate: minBookingDate,
    maxBookingDate: maxBookingDate,
    onDatesChange: handleDataChange,
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput,
    onClose: action('onClose'),
    displayFormat: displayFormat,
    vertical: vertical,
    rtl: rtl,
    showClose: showClose,
    showResetDates: showResetDates,
    showSelectedDates: showSelectedDates,
    exactMinBookingDays: exactMinBookingDays,
    minBookingDays: minBookingDays,
    numberOfMonths: numberOfMonths,
    firstDayOfWeek: firstDayOfWeek,
    phrases: phrasesProp,
    isDateBlocked: isDateBlocked,
    dayLabelFormat: dayLabelFormat,
    weekdayLabelFormat: weekdayLabelFormat,
    monthLabelFormat: monthLabelFormat,
    onDayRender: onDayRender,
  })
}
storiesOf('Datepicker', module)
  .add('Simple demo', function() {
    return React.createElement(App, {
      rtl: boolean('rtl', false),
      vertical: boolean('vertical', false),
      exactMinBookingDays: boolean('exactMinBookingDays', false),
      showResetDates: boolean('showResetDates', true),
      showClose: boolean('showClose', true),
      showSelectedDates: boolean('showSelectedDates', true),
      displayFormat: text('displayFormat', 'MM/dd/yyyy'),
    })
  })
  .add('Minimum booking days (7 days)', function() {
    return React.createElement(App, {
      rtl: boolean('rtl', false),
      vertical: boolean('vertical', false),
      exactMinBookingDays: boolean('exactMinBookingDays', false),
      showResetDates: boolean('showResetDates', true),
      showClose: boolean('showClose', true),
      showSelectedDates: boolean('showSelectedDates', true),
      displayFormat: text('displayFormat', 'MM/dd/yyyy'),
      minBookingDays: 7,
    })
  })
  .add('Number of months (3 months)', function() {
    return React.createElement(App, {
      rtl: boolean('rtl', false),
      vertical: boolean('vertical', false),
      exactMinBookingDays: boolean('exactMinBookingDays', false),
      showResetDates: boolean('showResetDates', true),
      showClose: boolean('showClose', true),
      showSelectedDates: boolean('showSelectedDates', true),
      displayFormat: text('displayFormat', 'MM/dd/yyyy'),
      numberOfMonths: 3,
    })
  })
  .add('First day of the week (Sunday)', function() {
    return React.createElement(App, {
      rtl: boolean('rtl', false),
      vertical: boolean('vertical', false),
      exactMinBookingDays: boolean('exactMinBookingDays', false),
      showResetDates: boolean('showResetDates', true),
      showClose: boolean('showClose', true),
      showSelectedDates: boolean('showSelectedDates', true),
      displayFormat: text('displayFormat', 'MM/dd/yyyy'),
      firstDayOfWeek: 0,
    })
  })
  .add('Custom phrases', function() {
    return React.createElement(App, {
      rtl: boolean('rtl', false),
      vertical: boolean('vertical', false),
      exactMinBookingDays: boolean('exactMinBookingDays', false),
      showResetDates: boolean('showResetDates', true),
      showClose: boolean('showClose', true),
      showSelectedDates: boolean('showSelectedDates', true),
      displayFormat: text('displayFormat', 'MM/dd/yyyy'),
      firstDayOfWeek: 0,
      phrasesProp: {
        datepickerStartDatePlaceholder: 'Seleccionar',
        datepickerStartDateLabel: 'Fecha de inicio:',
        datepickerEndDatePlaceholder: 'Seleccionar',
        datepickerEndDateLabel: 'Fecha final:',
        resetDates: 'Deshacer',
        close: 'Cerca',
      },
    })
  })
  .add('Localization', function() {
    return React.createElement(App, {
      rtl: boolean('rtl', false),
      vertical: boolean('vertical', false),
      exactMinBookingDays: boolean('exactMinBookingDays', false),
      showResetDates: boolean('showResetDates', true),
      showClose: boolean('showClose', true),
      showSelectedDates: boolean('showSelectedDates', true),
      displayFormat: text('displayFormat', 'MM/dd/yyyy'),
      firstDayOfWeek: 0,
      phrasesProp: {
        datepickerStartDatePlaceholder: 'Seleccionar',
        datepickerStartDateLabel: 'Fecha de inicio:',
        datepickerEndDatePlaceholder: 'Seleccionar',
        datepickerEndDateLabel: 'Fecha final:',
        resetDates: 'Deshacer',
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
      exactMinBookingDays: boolean('exactMinBookingDays', false),
      showResetDates: boolean('showResetDates', true),
      showClose: boolean('showClose', true),
      showSelectedDates: boolean('showSelectedDates', true),
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
        exactMinBookingDays: boolean('exactMinBookingDays', false),
        showResetDates: boolean('showResetDates', true),
        showClose: boolean('showClose', true),
        showSelectedDates: boolean('showSelectedDates', true),
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
        exactMinBookingDays: boolean('exactMinBookingDays', false),
        showResetDates: boolean('showResetDates', true),
        showClose: boolean('showClose', true),
        showSelectedDates: boolean('showSelectedDates', true),
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
        exactMinBookingDays: boolean('exactMinBookingDays', false),
        showResetDates: boolean('showResetDates', true),
        showClose: boolean('showClose', true),
        showSelectedDates: boolean('showSelectedDates', true),
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
        exactMinBookingDays: boolean('exactMinBookingDays', false),
        showResetDates: boolean('showResetDates', true),
        showClose: boolean('showClose', true),
        showSelectedDates: boolean('showSelectedDates', true),
        displayFormat: text('displayFormat', 'MM/dd/yyyy'),
      }),
    )
  })
//# sourceMappingURL=Datepicker.stories.js.map
