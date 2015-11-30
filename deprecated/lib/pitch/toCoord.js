var ntc = require('../notation/ntc')
var itc = require('../notation/itc')

/**
 * Convert a note or interval string into [coord notation]()
 *
 * @name pitch.toCoord
 * @function
 * @param {String} pitch - the note or interval to parse
 * @return {Array} the pitch in array notation
 *
 * @example
 * pitch.parse('C2') // => [0, 2, null]
 * pitch.parse('5P') // => [1, 0]
 */
module.exports = function (n) { return ntc(n) || itc(n) }
