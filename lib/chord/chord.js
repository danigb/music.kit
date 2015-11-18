var harmonics = require('../gamut/harmonics')
var transpose = require('../note/transpose')

/**
 * Create a chord from a source and a tonic. A chord is a list of notes or
 * intervals in asceding pitch order
 *
 * The source can be a list of intervals or notes. The tonic must be
 * a pitch (with or without octave) or false to get the intervals
 *
 * This function is currified, so you can partially apply the function passing
 * one parameter instead of two (see example)
 *
 * @name chord.chord
 * @param {Array} source - the list of intervals or notes
 * @param {String} tonic - the tonic of the chord or null to get the intervals
 * @return {Array} the chord notes (or intervals if null tonic)
 *
 * @example
 * var chord = require('music.kit/chord/chord')
 * chord('1 3 5 6', 'G') // => ['G', 'B', 'D', 'E']
 * var maj79 = chord('C E G B D')
 * maj79('A4') // => ['A4', 'C#5', 'E5', 'G#5', 'B5']
 */
module.exports = function (notes, tonic) {
  var h = harmonics(notes)
  return h.map(transpose(tonic))
}
