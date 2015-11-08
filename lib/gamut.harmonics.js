
var operation = require('./gamut.operation')
var setOctave = require('./note.setOctave')
var distance = require('./note.distance')

/**
 * Get the distances from the first note of a gamut to the rest of notes
 *
 * Pitch classes are treated as notes with octave equal 0
 *
 * @name gamut.harmonics
 * @function
 * @param {String|Array} gamut - the list of notes
 *
 * @example
 * gamut.harmonics('c2 e2 g2') // => ['1P', '3M', '5P']
 */
module.exports = operation(function (gamut) {
  var notes = gamut.map(setOctave(0))
  var tonic = notes[0]
  return notes.map(distance(tonic))
})
