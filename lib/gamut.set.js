'use strict'

var simplify = require('./pitch.simplify')
var operation = require('./gamut.operation')
var ascending = require('./gamut.ascending')

/**
 * A set is a list of uniq pitch classes or simplified intervals in ascending pitch order
 *
 * @name gamut.set
 * @function
 * @param {String|Array} gamut - the gamut
 * @return {String|Array} the set
 *
 * @example
 * gamut.set('E7 C2 e D5 c1') // => ['C', 'D', 'E']
 * gamut.set('11 10 9') // => [ '2M', '3M', '4P' ]
 */
module.exports = operation(function (gamut) {
  var sorted = ascending(gamut.map(simplify))
  return sorted.reduce(function (uniq, value, index) {
    if (index === 0 || !equal(sorted[index - 1], value)) uniq.push(value)
    return uniq
  }, [])
})

function equal (a, b) {
  return a[0] === b[0] && a[1] === b[1]
}
