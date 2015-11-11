'use strict'

var scales = require('./dictionary')
var getter = require('../namedSet/getter')

/**
 * Get a scale by name using a dictionary.
 *
 * You can get scale notes by passing a tonic or the scale intervals by passing
 * `false` as tonic
 *
 * There is two ways to get a scale:
 * - With name and tonic: `scale.get('major', 'C')`
 * - With tonic included in name: `scale.get('C major')`
 *
 * This function can be partially applied (see examples)
 *
 * @name scale.get
 * @function
 * @param {String} name - the scale name (optionally can include the tonic)
 * @return {Object} a data object with the scale properties
 *
 * @example
 * var get = require('music.kit/scale/get')
 * // with name and tonic
 * get('major', 'C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
 * // with tonic inside the name
 * get('C major') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
 * // partially applied
 * var major = get('major')
 * major('C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
 */
module.exports = getter(scales)
