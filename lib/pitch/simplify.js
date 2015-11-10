var operation = require('./operation')

/**
 * Simplifies a pitch. If its a note, it returns its pitch class. If its an
 * interval it returns the simplified interval
 *
 * @name pitch.simplify
 * @function
 * @param {String|Array} pitch - the pitch
 * @return {String|Array} the simplified pitch
 *
 * @example
 * var simplify = require('music.kit/pitch.simplify')
 * simplify('C#4') // => 'C#'
 * simplify('9m') // => '2m'
 */
module.exports = operation(function (p) {
  if (!Array.isArray(p)) return null
  return p.length === 2 ? [p[0], -Math.floor(p[0] * 7 / 12)] : [p[0]]
})
