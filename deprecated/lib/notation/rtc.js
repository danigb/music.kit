'use strict'

var ptc = require('./ptc')
var REGEX = /^(b|bb|#|##|)(i|ii|iii|iv|v|vi|vii)$/
// roman numberals to pitch property number
var NUM = {i: 0, ii: 1, iii: 2, iv: 3, v: 4, vi: 5, vii: 6}

/**
 * Roman to coordinate: convert from [roman numerals](https://en.wikipedia.org/wiki/Roman_numeral_analysis)
 * to [pitch coordinates]()
 *
 * @name rtc
 * @function
 * @param {String} str - the roman numeral string
 * @return {Array} a coord or null if not valid roman numeral literal
 *
 * @example
 * rtc('V') // => [1]
 * rtc('bII') // => [-5]
 */
module.exports = function (str) {
  var m = REGEX.exec(str.toLowerCase())
  var num = NUM[m[2]]
  if (typeof num === 'undefined') return null
  var alt = m[1].length
  if (m[1][0] === 'b') alt = -alt
  return ptc([num, alt])
}
