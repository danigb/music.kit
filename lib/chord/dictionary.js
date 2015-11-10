'use strict'

var data = require('./chords.json')
var dictionary = require('../namedSet/dictionary')

/**
 * Chord dictionary
 *
 * @name chord.dictionary
 * @kind constant
 *
 * @example
 * var chords = require('music.kit/chord/dictionary')
 * chords['Maj7'] // => { name: 'Maj7', intervals: ['1', '3', ...], aliases: [] }
 */
module.exports = dictionary(data)
