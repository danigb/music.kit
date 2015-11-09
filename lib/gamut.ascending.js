'use strict'

var height = require('./pitch.height')
var operation = require('./gamut.operation')

/**
 * Get a gamut in ascdening pitch order
 *
 * @name pitch.ascending
 * @function
 * @param {String|Array} gamut - the gamut to sort
 * @return {Array} the gamut in ascending pitch order
 *
 * @example
 * gamut.ascending('c5 d2 f4 D2') // => ['D2', 'D2', 'F4', 'C5']
 */
module.exports = operation(function (gamut) {
  return gamut.sort(function (a, b) {
    return height(a) - height(b)
  })
})
