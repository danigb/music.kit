'use strict'
var data = require('./scales.json')
var binarySet = require('../gamut.binarySet')

/**
 * A scale dictionary
 *
 * @private
 * @kind constant
 */
module.exports = Object.keys(data).reduce(function (scales, n) {
  var s = { name: n, intervals: data[n][0].split(' '), aliases: data[n][1] || [] }
  s.binary = binarySet(s.intervals)
  s.decimal = parseInt(s.binary, 2)
  scales[n] = scales[s.binary] = scales[s.decimal] = s
  s.aliases.forEach(function (a) { scales[a] = s })
  return scales
}, {})
