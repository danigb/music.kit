'use strict'
var data = require('./chords.json')

/**
 * A chord dictionary
 *
 * @private
 * @kind constant
 */
module.exports = Object.keys(data).reduce(function (chords, n) {
  var c = chords[n] = { name: n, intervals: data[n][0].split(' '), aliases: data[n][1] || [] }
  c.aliases.forEach(function (a) { chords[a] = c })
  return chords
}, {})
