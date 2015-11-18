'use strict'

var rotate = require('../gamut/rotate')
var scale = require('../scale/scale')

/**
 * Get all modes of a scale
 *
 * @name scale.modes
 * @function
 * @param {Array} scale - the scale
 * @param {Array} all the modes of the scale
 *
 * @example
 * var modes = require('music.kit/scale/modes')
 * modes('C D E') // => [ ['C', 'D', 'E'], ['D', 'E', 'C'], ['E', 'C', 'D'] ]
 */
module.exports = function (notes) {
  var s = scale(notes, null)
  return s.map(function (n, i) {
    return rotate(i, s)
  })
}
