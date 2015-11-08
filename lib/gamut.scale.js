'use strict'

var operation = require('./gamut.operation')
var set = require('./gamut.set')
var harmonics = require('./gamut.harmonics')
var transpose = require('./note.transpose')
var curry = require('./_curry2')

/**
 * @name scale
 * @function
 */
module.exports = curry(function (notes, tonic) {
  return intervals(notes).map(transpose(tonic))
})

var intervals = operation(function (gamut) {
  var l = gamut.length
  var s = set(gamut)
  var i = indexOf(gamut[0][0], s, l)
  var ordered = s.slice(i, l).concat(s.slice(0, i))
  return harmonics(ordered).map(function (p) {
    // if descending, add an octave
    if (p[0] * 7 + 12 * p[1] < 0) p[1]++
    return p
  })
})

function indexOf (p, g, l) {
  for (var i = 0; i < l; i++) {
    if (g[i][0] === p) return i
  }
  return 0
}
