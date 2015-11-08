var operation = require('./pitch.operation')
var curry = require('./_curry2')

/**
 * Transpose a note by an interval.
 *
 * This function is currified. The orider of the parameters is indiferent.
 *
 * @name transpose
 * @function
 * @param {String|Array} interval - the interval. If its false, the note is not
 * transposed.
 * @param {String|Array} note - the note to transpose
 * @return {String|Array} the note transposed
 *
 * @example
 * transpose('3m', 'c2') // => 'Eb3'
 */
module.exports = curry(operation(function (i, n) {
  if (i === false) return n
  else if (!Array.isArray(i) || !Array.isArray(n)) return null
  else return [n[0] + i[0], n[1] + i[1], n[2] || i[2]]
}))
