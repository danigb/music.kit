var split = require('./gamut.split')
var parse = require('./pitch.parse')
var build = require('./pitch.str')

/**
 * Apply a function to an array of array pitches
 *
 * @name operation
 * @function
 */
module.exports = function (fn) {
  return function (source) {
    var g = split(source)
    if (Array.isArray(g[0])) return fn(g)
    var v = fn(g.map(parse))
    return v ? v.map(build) : v
  }
}
