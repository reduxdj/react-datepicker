import React from 'react'
import {renderHook} from '@testing-library/react-hooks'
import {ThemeProvider} from 'styled-components'
import useThemeProps from '.'
test('should return empty object - no provider', function() {
  var result = renderHook(function() {
    return useThemeProps()
  }).result
  expect(result.current).toEqual({})
})
var emptyTheme = function(_a) {
  var children = _a.children
  return React.createElement(ThemeProvider, {theme: {}}, children)
}
test('should return empty object - empty theme', function() {
  var result = renderHook(
    function() {
      return useThemeProps()
    },
    {wrapper: emptyTheme},
  ).result
  expect(result.current).toEqual({})
})
var emptyDatepickerTheme = function(_a) {
  var children = _a.children
  return React.createElement(ThemeProvider, {theme: {reactDatepicker: {}}}, children)
}
test('should return empty object - empty reactDatepicker', function() {
  var result = renderHook(
    function() {
      return useThemeProps()
    },
    {wrapper: emptyDatepickerTheme},
  ).result
  expect(result.current).toEqual({})
})
var datepickerTheme = function(_a) {
  var children = _a.children
  return React.createElement(ThemeProvider, {theme: {reactDatepicker: {width: '50px'}}}, children)
}
test('should return theme values', function() {
  var result = renderHook(
    function() {
      return useThemeProps({width: '60px', height: '100px'})
    },
    {
      wrapper: datepickerTheme,
    },
  ).result
  expect(result.current).toEqual({width: '50px', height: '100px'})
})
//# sourceMappingURL=useThemeProps.test.js.map
