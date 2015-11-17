'use strict'

var modes = require('./modes')
var type = require('../chord/type')
var select = require('../gamut/select')

/**
 * Get chords of a scale
 *
 * @name scale.chords
 * @function
 * @param {Array|String} scale - the scale
 * @return {Array} an array with the key chord names
 *
 * @example
 * scale.chords('c d e f g a b') // => ['C', 'Dm', 'Em', 'F', 'G7', 'Am', 'Bo'
 */
module.exports = function (scale) {
  return modes(scale).map(function (mode) {
    var chord = select('1 3 5 7', mode)
    var t = type(chord)
    return t ? chord[0] + t.replace('M', '') : null
  })
}
