var curry = require('../_curry')
var operation = require('../pitch/operation')

/**
 * Get the interval between two notes
 *
 * If one or both notes are pitch classes, a simple ascending interval is returned
 *
 * This function can be partially applied (see examples)
 *
 * @name note.distance
 * @function
 * @param {String|Array} from - the first note
 * @param {String|Array} to - the other note
 * @return {String|Array} the interval between them
 *
 * @example
 * var distance = require('music.kit/note/distance')
 * distance('C2', 'D3') // => '9M'
 * distance('D2', 'C2') // => '-2M'
 * distance('D', 'C') // => '7m'
 */
module.exports = curry(operation(function (a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return null
  if (a.length === 1 || b.length === 1) {
    var base = b[0] - a[0]
    return [base, -Math.floor(base * 7 / 12)]
  }
  return [b[0] - a[0], b[1] - a[1]]
}))
