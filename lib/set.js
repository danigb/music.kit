'use strict'

/**
 * In music.kit a set is a collection of pitch classes (or simple intervals)
 * sorted in ascending order
 *
 * The `set` module has functions to create and manipulate set
 */
var set = require('./set/build')
set.binary = require('./set/binary.js')
set.fromBinary = require('./set/fromBinary.js')

module.exports = set
