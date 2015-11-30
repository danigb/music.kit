var ctn = require('../notation/ctn')
var cti = require('../notation/cti')

/**
 * Convert a pitch in array notation to string. It deals with notes, pitch
 * classes and intervals.
 *
 * @name pitch.fromCoord
 * @function
 * @param {Array} pitch - the pitch in array notation
 * @return {String} the pitch string
 *
 * @example
 * var pitch = require('music.pitch')
 * // pitch class
 * pitch.fromCoord([0]) // => 'C'
 * // interval
 * pitch.fromCoord([0, 0]) // => '1P'
 * // note
 * pitch.fromCoord([0, 2, 4]) // => 'C2/4'
 *
 * @example
 * // require the function only
 * var fromCoord = require('music.pitch/fromCoord')
 */
module.exports = function (n) { return ctn(n) || cti(n) }
