'use strict'

var memo = require('./_memo')
var BASES = [ [0, 0], [2, -1], [4, -2], [-1, 1], [1, 0], [3, -1], [5, -2] ]
var INTERVAL = /^([-+]?)(\d+)(d{1,4}|m|M|P|A{1,4}|b{1,4}|#{1,4}|)$/
var TYPES = 'PMMPPMM'
var QALT = {
  P: { dddd: -4, ddd: -3, dd: -2, d: -1, P: 0, A: 1, AA: 2, AAA: 3, AAAA: 4 },
  M: { ddd: -4, dd: -3, d: -2, m: -1, M: 0, A: 1, AA: 2, AAA: 3, AAAA: 4 }
}

/**
 * Interval to coord: Convert a [interval shorthand notation](https://en.wikipedia.org/wiki/Interval_(music)#Shorthand_notation)
 * to [coord interval notation](https://github.com/danigb/music.array.notation)
 *
 * This function is cached for better performance.
 *
 * @name notation.itc
 * @function
 * @param {String} interval - the interval string
 * @return {Array} the interval in array notation or null if not a valid interval
 *
 * @example
 * var parse = require('music.notation/itc')
 * parse('3m') // => [2, -1, 0]
 * parse('9b') // => [1, -1, 1]
 * parse('-2M') // => [6, -1, -1]
 */
module.exports = memo(function parse (str) {
  var m = INTERVAL.exec(str)
  if (!m) return null
  var dir = m[1] === '-' ? -1 : 1
  var num = +m[2] - 1

  var simple = num % 7
  var base = BASES[simple]

  var alt
  if (m[3] === '') alt = 0
  else if (m[3][0] === '#') alt = m[3].length
  else if (m[3][0] === 'b') alt = -m[3].length
  else {
    alt = QALT[TYPES[simple]][m[3]]
    if (typeof alt === 'undefined') return null
  }
  var oct = dir * Math.floor(num / 7)
  return [dir * (base[0] + 7 * alt), oct + dir * (base[1] - 4 * alt)]
})
