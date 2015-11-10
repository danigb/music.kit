'use strict'

// Map from number of fifths to interval number (0-index) and octave
// -1 = fourth, 0 = unison, 1 = fifth, 2 = second, 3 = sixth...
var BASES = [[3, 1], [0, 0], [4, 0], [1, -1], [5, -1], [2, -2], [6, -2], [3, -3]]

/**
 * Get the properties of a pitch in array notation as an array of properties
 *
 * The properties is in the form [number, alteration, octave, duration]
 *
 * __This is the only function in music.kit that only accepts array.notation format__
 *
 * @name pitch.props
 * @function
 * @param {Array} array - the pitch in array notation
 * @return {Array} the properties array
 *
 * @example
 * var props = require('music.kit/pitch.props')
 * props([2, 1, 4]) // => [1, 2, 4]
 */
module.exports = function (arr) {
  if (!Array.isArray(arr)) return null
  var index = (arr[0] + 1) % 7
  if (index < 0) index = 7 + index
  var base = BASES[index]
  var alter = Math.floor((arr[0] + 1) / 7)
  var oct = arr.length === 1 ? null : arr[1] - base[1] + alter * 4
  var dur = arr[2] ? '/' + arr[2] : null
  return [base[0], alter, oct, dur]
}
