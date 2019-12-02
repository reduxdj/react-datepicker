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
import React from 'react'
import {render} from '@testing-library/react'
import DatepickerContext, {datepickerContextDefaultValue} from './context/datepickerContext'
function renderWithProviders(ui, options, contextValues) {
  return render(
    React.createElement(
      DatepickerContext.Provider,
      {value: __assign({}, datepickerContextDefaultValue, contextValues)},
      ui,
    ),
    options,
  )
}
export * from '@testing-library/react'
export {renderWithProviders as render}
//# sourceMappingURL=testUtil.js.map
