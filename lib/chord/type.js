'use strict'

var harmonics = require('../gamut/harmonics')

/**
 * Get the type of the chord (can be 'M', 'm', '7' or 'o' to represent major,
 * minot, dominant and dimished respectively)
 *
 * @name chord.type
 * @function
 * @param {Array} chord - the chord notes
 * @return {String} the chord type ('M', 'm', '7', 'o' or null)
 *
 * @example
 * var chord = require('music.kit/chord/type')
 * chord.type('C E G')
 */
module.exports = function (chord) {
  var g = harmonics(chord)
  if (g[1] === '3M') return g[3] === '7m' ? '7' : 'M'
  if (g[1] === '3m') return g[2] === '5P' ? 'm' : 'o'
  return null
}
