'use strict'

var data = require('./chords.json')
var dictionary = require('../dictionary/dictionary')

/**
 * A chord dictionary
 *
 * @name chord.dictionary
 * @function
 * @param {String} name - the chord name
 * @see dictionary/dictionary
 *
 * @example
 * var chords = require('music.kit/chord/dictionary')
 * chords('Maj7') // => { name: 'Maj7', intervals: ['1', '3', ...], aliases: [] }
 */
module.exports = dictionary(data)
