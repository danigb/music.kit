var sn = require('../notation/ctn')
var si = require('../notation/cti')

/**
 * Convert a pitch in array notation to string. It deals with notes, pitch
 * classes and intervals.
 *
 * @name pitch.str
 * @function
 * @param {Array} pitch - the pitch in array notation
 * @return {String} the pitch string
 *
 * @example
 * // pitch class
 * pitch.str([0]) // => 'C'
 * // interval
 * pitch.str([0, 0]) // => '1P'
 * // note
 * pitch.str([0, 2, 4]) // => 'C2/4'
 */
module.exports = function (n) { return sn(n) || si(n) }
