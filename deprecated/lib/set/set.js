'use strict'

var simplify = require('../pitch/simplify')
var operation = require('../gamut/operation')
var sort = require('../gamut/sort')

/**
 * Create a set: a set is a list of uniq pitch classes or simplified intervals
 * in ascending pitch order
 *
 * @name set.set
 * @function
 * @param {String|Array} notes - the note list
 * @return {String|Array} the set
 *
 * @example
 * var set = require('music.set/set')
 * set('E7 C2 e D5 c1') // => ['C', 'D', 'E']
 * set('11 10 9') // => [ '2M', '3M', '4P' ]
 */
module.exports = operation(function (notes) {
  var sorted = sort(notes.map(simplify))
  return sorted.reduce(function (uniq, value, index) {
    if (index === 0 || !equal(sorted[index - 1], value)) uniq.push(value)
    return uniq
  }, [])
})

function equal (a, b) {
  return a[0] === b[0] && a[1] === b[1]
}
