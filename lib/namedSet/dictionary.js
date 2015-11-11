'use strict'

var binary = require('../set/binary')

/**
 * Create a named set dictionary
 *
 * @name namedSet.dictionary
 * @function
 * @param {Hash} data - the dictionary data
 * @return {Hash} the dictionary
 *
 * @example
 * var dictionary = require('music.kit/namedSet/dictionary')
 * var chords = dictionary({'Maj7', ['1 3 5 7', ['maj7', 'M7']]})
 *
 * // get chord by name
 * chords['Maj7'].name = 'Maj7'
 * chords['Maj7'].aliases = ['maj7', 'M7']
 * chords['Maj7'].intervals // => ['1', '3', '5', '7']
 *
 * // get chord by aliases
 * chords['maj7'].intervals // => ['1', '3', '5', '7']
 * chords['maj7'].name // => 'Maj7'
 * chords['M7'].intervals // => ['1', '3', '5', '7']
 * chords['M7'].name // => 'Maj7'
 *
 * // get chord by binary numbers
 * chords['100010010001'].name // => 'Maj7'
 * chords[2193].name // => 'Maj7'
 */
module.exports = function (data) {
  return Object.keys(data).reduce(function (dict, n) {
    var s = { name: n, intervals: data[n][0].split(' '), aliases: data[n][1] || [] }
    s.binary = binary(s.intervals)
    s.decimal = parseInt(s.binary, 2)
    dict[n] = dict[s.binary] = dict[s.decimal] = s
    s.aliases.forEach(function (a) { dict[a] = s })
    return dict
  }, {})
}
