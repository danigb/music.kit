'use strict'

/**
 * Dictionary is a module to work with dictionaries of pitch collections
 *
 * Its the foundation of the scale and chord dictionary of music.kit
 *
 * Currently `dictionary` module has the following functions:
 *
 * - build: create dictionaries
 * - getter: create a getter function for a dictionary
 * - names: create a reverse lookup function for a dictionary
 * - splitName: split a set name into type and tonic
 *
 * @name dictionary
 * @function
 */
var d = require('./dictionary/build')
d.getter = require('./dictionary/getter')
d.names = require('./dictionary/names')
d.splitName = require('./dictionary/splitName')
module.exports = d
