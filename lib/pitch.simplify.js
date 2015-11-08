var operation = require('./pitch.operation')

/**
 * @name simplify
 *
 * @function
 */
module.exports = operation(function (p) {
  if (!Array.isArray(p)) return null
  return p.length === 2 ? [p[0], -Math.floor(p[0] * 7 / 12)] : [p[0]]
})
