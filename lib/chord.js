'use strict'

/**
 * In music.kit an chord is a list of notes or intervals ordered
 * by pitch
 *
 * The `chord` module has functions to create and manipulate chord
 *
 * @example
 * var kit = require('music.kit')
 * kit.chord('1 3 5 6', 'G') // => ['G', 'B', 'D', 'E']
 * kit.chord.get('Cmaj7') // => ['C', 'E', 'G', 'B']
 */
var chord = require('./gamut/chord')
chord.get = require('./chord/get')
chord.notes = require('./chord/notes')

module.exports = chord
