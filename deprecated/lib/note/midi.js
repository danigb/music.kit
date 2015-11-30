'use strict'

var parse = require('../notation/ntc')

/**
 * Get the midi number of a note
 *
 * The note can be an string in scientific notation or
 * [array pitch notation](https://github.com/danigb/music.array.notation)
 *
 * @name note.midi
 * @function
 * @param {String|Array} note - the note in string or array notation
 * @return {Integer} the midi number
 *
 * @example
 * midi('A4') // => 69
 * midi('A3') // => 57
 * midi([0, 2]) // => 36 (C2 in array notation)
 */
module.exports = function (note) {
  var n = Array.isArray(note) ? note : parse(note)
  var m = n && n.length > 1 ? n[0] * 7 + n[1] * 12 + 12 : -1
  return m < 0 || m > 127 ? null : m
}
