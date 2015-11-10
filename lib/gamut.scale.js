'use strict'

var operation = require('./gamut.operation')
var set = require('./gamut.set')
var harmonics = require('./gamut.harmonics')
var transpose = require('./note.transpose')
var curry = require('./_curry2')

/**
 * Build a scale from a source and a tonic. A scale is a set of notes or
 * intervals ordered by frequency with a tonic.
 *
 * A source can be a list of intervals or notes. The tonic must be
 * a pitch (with or without octave) or false to get the scale intervals
 *
 * This function is currified, so you can partially apply the function passing
 * one parameter instead of two (see example)
 *
 * @name gamut.scale
 * @function
 * @param {Array} source - the list of intervals or notes
 * @param {String} tonic - the tonic of the scale
 * @return {Array} the list of notes
 *
 * @example
 * var scale = require('music.kit/gamut.scale')
 * // basic usage
 * scale('1 2 3 5 6', 'G') // => ['G', 'A', 'B', 'D', 'E']
 * scale('1 2 3 5 6', false) // => ['1P', '2M', '3M', '5P', '6M']
 *
 * @example
 * // partially applied
 * var dorian = scale('D E F G A B C')
 * dorian('C4') // => ['C4', 'D4', 'Eb4', 'F4', 'G4', 'A4', 'Bb4']
 */
module.exports = curry(function (notes, tonic) {
  return intervals(notes).map(transpose(tonic))
})

var intervals = operation(function (gamut) {
  var l = gamut.length
  var s = set(gamut)
  var i = gamut[0] ? indexOf(gamut[0][0], s, l) : 0
  var ordered = s.slice(i, l).concat(s.slice(0, i))
  return harmonics(ordered).map(function (p) {
    // if descending, add an octave
    if (p[0] * 7 + 12 * p[1] < 0) p[1]++
    return p
  })
})

function indexOf (p, g, l) {
  for (var i = 0; i < l; i++) {
    if (g[i][0] === p) return i
  }
}
