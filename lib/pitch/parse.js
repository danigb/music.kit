var pn = require('../note/parse')
var pi = require('../interval/parse')

/**
 * Parse a note or an interval
 *
 * @name pitch.parse
 * @function
 * @param {String} pitch - the note or interval to parse
 * @return {Array} the pitch in array notation
 *
 * @example
 * pitch.parse('C2') // => [0, 2, null]
 * pitch.parse('5P') // => [1, 0]
 */
module.exports = function (n) { return pn(n) || pi(n) }
