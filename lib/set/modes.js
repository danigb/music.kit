'use strict'

var split = require('../gamut/split')
var rotate = require('../gamut/rotate')

/**
 * Get all modes of a binary set
 *
 * @name set.modes
 * @function
 * @param {String|Array} set - the notes of the set
 * @param {Array} an array of a binary number for each mode
 *
 * @example
 * rotations('C d E') // => [ ['C', 'd', 'E'], ['d', 'E', 'C'], ['E', 'C', 'd'] ]
 */
module.exports = function (set) {
  var g = split(set)
  return g.map(function (e, i) {
    return rotate(i, g)
  })
}
