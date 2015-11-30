var curry = require('../_curry')
var operation = require('../pitch/operation')

/**
 * Set the octave of the given note
 *
 * @name note.setOctave
 * @function
 * @param {Integer} octave - the octave to set
 * @param {String|Array} note - the note
 * @return {String|Array} a copy of the same note with the octave changed
 *
 * @example
 * var setOctave = require('music.kit/note.setOctave')
 * setOctave('2', 'C#1') // => 'C#2'
 */
module.exports = curry(operation(function (oct, n) {
  if (!Array.isArray(n)) return null
  return [n[0], -Math.floor(n[0] * 7 / 12) + oct, n[2] || null]
}))
