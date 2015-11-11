'use strict'

/**
 * Dictionary is a module to work with dictionaries of pitch collections
 *
 * Its the foundation of the scale and chord dictionary of music.kit
 *
 */
var d = require('./dictionary/build')
d.getter = require('./dictionary/getter')
d.names = require('./dictionary/names')
d.splitName = require('./dictionary/splitName')
module.exports = d
