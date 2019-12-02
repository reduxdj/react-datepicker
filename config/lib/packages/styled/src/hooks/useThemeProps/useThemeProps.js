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
import {ThemeContext} from 'styled-components'
import {useContext, useMemo} from 'react'
export default function useThemeProps(themeProps) {
  if (themeProps === void 0) {
    themeProps = {}
  }
  var context = useContext(ThemeContext)
  var theme = useMemo(
    function() {
      if (
        context &&
        typeof context === 'object' &&
        context.reactDatepicker &&
        typeof context.reactDatepicker === 'object'
      ) {
        return Object.keys(themeProps).reduce(function(prevObj, val) {
          var _a
          return __assign(
            {},
            prevObj,
            ((_a = {}), (_a[val] = context.reactDatepicker[val] || themeProps[val]), _a),
          )
        }, {})
      }
      return themeProps
    },
    [context, themeProps],
  )
  return theme
}
//# sourceMappingURL=useThemeProps.js.map
