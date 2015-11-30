'use strict'

/**
 * In music.kit a set is a collection of pitch classes (or simple intervals)
 * sorted in ascending order
 *
 * The `set` module has functions to create and manipulate set
 */
var set = require('./set')
set.binary = require('./binary')
set.fromBinary = require('./fromBinary')

module.exports = set
