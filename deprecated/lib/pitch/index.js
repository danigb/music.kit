'use strict'

/**
 * In music.kit a pitch it's a note, an interval or a pitch class. It allows us
 * to work with this elements in an uniform way.
 *
 * All the function in this module are valid for notes, or intervals
 *
 * @name pitch
 * @module
 *
 * @example
 * var pitch = require('music.pitch')
 * pitch.height('C2') // => 24
 * pitch.height('5P') // => 7
 */
var pitch = require('./pitch')
pitch.toCoord = require('./toCoord')
pitch.fromCoord = require('./fromCoord')
pitch.simplify = require('./simplify')
pitch.height = require('./height')
pitch.operation = require('./operation')
module.exports = pitch
