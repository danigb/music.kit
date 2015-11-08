'use strict'

var height = require('./pitch.height')
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
  var m = height(note) + 12
  return m < 0 || m > 127 ? null : m
}
