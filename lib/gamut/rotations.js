'use strict'

var split = require('./split')
var rotate = require('./rotate')

/**
 * Get all rotations of a gamut
 *
 * @name gamut.rotations
 * @function
 * @param {String|Array} gamut - the gamut
 * @param {Array} all the rotations of the gamut
 *
 * @example
 * rotations('C d E') // => [ ['C', 'd', 'E'], ['d', 'E', 'C'], ['E', 'C', 'd'] ]
 */
module.exports = function (gamut) {
  var g = split(gamut)
  return g.map(function (e, i) {
    return rotate(i, g)
  })
}
