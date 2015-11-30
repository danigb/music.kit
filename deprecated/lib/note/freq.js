'use strict'

var midi = require('./midi')

/**
 * Get the pitch frequency in herzs with custom concert tuning
 *
 * This function is currified so it can be partially applied (see examples)
 *
 * @name note.freq
 * @function
 * @param {Float} tuning - the frequency of A4 (null means 440)
 * @param {String|Array} note - the note name
 * @return {Float} the frequency of the note
 *
 * @example
 * note.freq(null, 'A4') // => 440
 * note.freq(444, 'A4') // => 444
 *
 * @example
 * // partially applied
 * ['A4', 'A#4', 'B5'].map(note.freq(440)) // => [440, ...]
 * var baroque = note.freq(415)
 * baroque('A3') // => 207.5
 */
module.exports = function freq (tuning, pitch) {
  tuning = tuning || 440
  if (arguments.length > 1) return freq(tuning)(pitch)

  return function (p) {
    if (!isNaN(p)) return p
    var m = midi(p)
    if (!m) return null
    return Math.pow(2, (m - 69) / 12) * tuning
  }
}
