'use strict'

var transpose = require('../note/transpose')
var split = require('./splitName')

/**
 * Given a dictionary return a function to get the notes or intervals from it
 *
 * @name dictionary.getter
 * @function
 * @param {Hash} dictionary - the set dictionary
 * @return {Function} a function to get the notes or intervals from the set dictionary
 * @see scale.get
 * @see chord.get
 *
 * @example
 * var d = dictionary({'Maj7': ['1 3 5 7'], 'm7': ['1 3b 5 7b'] })
 * var get = getter(d)
 * get('CMaj7') // => ['C', 'E', 'G', 'B']
 */
module.exports = function (dictionary) {
  return function get (name, tonic) {
    var n = split(name)
    if (n.length === 2) return get(n[0], tonic || n[1])
    else if (arguments.length === 1) return function (t) { return get(name, t) }
    var v = dictionary[name]
    return v ? v.intervals.map(transpose(tonic)) : []
  }
}
