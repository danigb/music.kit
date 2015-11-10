'use strict'

var curry = require('../_curry')
var transpose = require('../note/transpose')

var INTERVALS = ['1P', '2m', '2M', '3m', '3M', '4', '4A', '5', '6m', '6M', '7m', '7M']

/**
 * Get a set from a binary set number and (optionally) a tonic. If the tonic is
 * a note, you get a pitch set. If its false you get a interval set.
 *
 * @name gamut.fromBinary
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @param {String} tonic - the first note of the set or false to get the intervals
 * @return {Array<String>} the set pitch classes (note names without octaves)
 *
 * @example
 * var fromBinary = require('music.kit/gamut.fromBinary')
 * // use a 12 digit binary number:
 * fromBinary('101011010101', 'C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
 * // or its decimal equivalent:
 * fromBinary(2773, 'C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
 * // get the interval set by passing `false` as tonic:
 * fromBinary(2773, false) // => ['1P', '2M', '3M', '4', '5', '6M', '7M']
 */
module.exports = curry(function (number, tonic) {
  if (/^1[01]{11}$/.test(number)) number = parseInt(number, 2)
  else if (typeof number !== 'number') return []
  var binary = ((number % 2048) + 2048).toString(2)

  var set = []
  for (var i = 0; i < 12; i++) {
    if (binary.charAt(i) === '1') set.push(INTERVALS[i])
  }
  return tonic === false ? set : set.map(transpose(tonic))
})
