'use strict'

/**
 * Dictionary is a module to work with dictionaries of pitch collections
 *
 * Its the foundation of the scale and chord dictionary of music.kit
 *
 * Currently `dictionary` module has the following functions:
 *
 * - dictionary: create dictionaries
 * - getter: create a getter function for a dictionary
 * - names: create a reverse lookup function for a dictionary
 * - splitName: split a set name into type and tonic
 *
 * @name dictionary
 * @module
 */
var d = require('./dictionary')
d.getter = require('./getter')
d.names = require('./names')
d.splitName = require('./splitName')
module.exports = d
