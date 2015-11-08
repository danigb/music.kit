var curry = require('./_curry2')
var operation = require('./pitch.operation')

/**
 * Get the interval between two notes
 *
 * @name distance
 * @function
 */
module.exports = curry(operation(function (a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length === 1 || b.length === 1) return null
  return [b[0] - a[0], b[1] - a[1]]
}))
