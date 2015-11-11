'use strict'

var simplify = require('../pitch/simplify')
var operation = require('../gamut/operation')
var sort = require('../gamut/sort')

/**
 * A set is a list of uniq pitch classes or simplified intervals in ascending pitch order
 *
 * This function is exported as `set` (see examples)
 *
 * @name set.build
 * @function
 * @param {String|Array} gamut - the gamut
 * @return {String|Array} the set
 *
 * @example
 * var set = require('music.kit/set/build')
 * set('E7 C2 e D5 c1') // => ['C', 'D', 'E']
 * set('11 10 9') // => [ '2M', '3M', '4P' ]
 *
 * @example
 * // use the function from music.kit
 * var kit = require('music.kit')
 * kit.set('e4 f5 ...')
 */
module.exports = operation(function (gamut) {
  var sorted = sort(gamut.map(simplify))
  return sorted.reduce(function (uniq, value, index) {
    if (index === 0 || !equal(sorted[index - 1], value)) uniq.push(value)
    return uniq
  }, [])
})

function equal (a, b) {
  return a[0] === b[0] && a[1] === b[1]
}
