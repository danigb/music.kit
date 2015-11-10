'use strict'

var binary = require('../set/binary')

/**
 * A scale dictionary
 *
 * @private
 * @kind constant
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
