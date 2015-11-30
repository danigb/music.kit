'use strict'

var fromCoord = require('./fromCoord')
var toCoord = require('./toCoord')
/**
 * Get a pitch from a string
 *
 * @name pitch.pitch
 * @function
 * @param {String} source - the string
 * @return {String} the pitch or null if not a valid pitch
 *
 * @example
 * var pitch = require('music.pitch')
 * pitch('c2') // => 'C2'
 * pitch('2') // => '2M'
 * pitch('blah') // => null
 */
module.exports = function (s) { return fromCoord(toCoord(s)) }
