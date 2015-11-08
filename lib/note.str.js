'use strict'

var props = require('./pitch.props')
var cache = {}

/**
 * Convert from [array notation](https://github.com/danigb/music.array.notation)
 * to [scientific pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation)
 *
 * Array length must be 1 or 3 (see array notation documentation)
 *
 * The returned string format is `letter[+ accidentals][+ octave][/duration]` where the letter
 * is always uppercase, and the accidentals, octave and duration are optional.
 *
 * This function is memoized for better perfomance.
 *
 * @name scientific
 * @function
 * @param {Array} arr - the note in array notation
 * @return {String} the note in scientific notation or null if not valid note array
 *
 * @example
 * scientific([0]) // => 'F'
 * scientific([0, 4]) // => null (its an interval)
 * scientific([0, 4, null]) // => 'F4'
 * scientific([0, 4, 2]) // => 'F4/2'
 */
module.exports = function (arr) {
  if (!Array.isArray(arr) || arr.length < 1 || arr.length === 2) return null
  var str = '|' + arr[0] + '|' + arr[1] + '|' + arr[2]
  return str in cache ? cache[str] : cache[str] = build(arr)
}

function accidentals (num) {
  if (num < 0) return Array(-num + 1).join('b')
  else if (num > 0) return Array(num + 1).join('#')
  else return ''
}

var LETTER = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
function build (coord) {
  var p = props(coord)
  return LETTER[p[0]] + accidentals(p[1]) + (p[2] !== null ? p[2] : '') + (p[3] !== null ? p[3] : '')
}
