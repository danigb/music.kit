'use strict'

var chords = require('./dictionary')
var getter = require('../namedSet/getter')

/**
 * Get a chord by name using a dictionary.
 *
 * You can get chord notes with a note as tonic or the chord intervals by passing
 * `false` as tonic
 *
 * There is two ways to get a chord:
 * - With type and tonic: `chord.get('Maj7', 'C')`
 * - With tonic included in name: `chord.get('CMaj7')`
 *
 * This function can be partially applied (see examples)
 *
 * @name chord.get
 * @function
 * @param {String} name - the chord name (optionally can include the tonic)
 * @return {Object} a data object with the chord properties
 *
 * @example
 * var get = require('music.kit/chord/get')
 * // with name and tonic
 * get('Maj7', 'C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
 * // with tonic inside the name
 * get('C major') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
 * // partially applied
 * var major = get('major')
 * major('C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
 */
module.exports = getter(chords)
