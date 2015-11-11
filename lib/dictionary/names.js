'use strict'

var binary = require('../set/binary')
var split = require('../gamut/split')

/**
 * Get a function to perform an inverse dictionary lookup (given notes, return names)
 *
 * @name dictionary.names
 * @function
 * @param {Array} names - the list of all names
 * @param {Hash} dictionary - the dictionary
 * @param {Function} builder - the name builder
 * @return {Function} a function to perform inverse lookup
 * @see scale.names
 * @see chord.names
 */
module.exports = function (names, dictionary, sep) {
  return function (notes) {
    if (arguments.length === 0) return names.slice()
    var s = dictionary[binary(notes)]
    if (!s) return []
    var tonic = split(notes)[0]
    return [ s.name ].concat(s.aliases).map(function (name) {
      return tonic + sep + name
    })
  }
}
