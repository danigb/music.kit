'use strict'

/**
 * In music.kit a note is represented by string, usually in scientific notation.
 *
 * The note module provides functions to manipulate notes:
 *
 * - Scientific notation: `ntc` and `ctn`
 * - Midi and frequencies: `note.midi`, `note.freq`, `note.fromMidi`
 * - Note properties: `note.pitchClass`, `note.setOctave`
 * - Enharmonics: `note.enharmonics`
 * - Transposition and distances: `note.transpose`, `note.distance`
 */
var note = require('./note')

note.midi = require('./midi')
note.fromMidi = require('./fromMidi')
note.freq = require('./freq')

// manipulation
note.pitchClass = require('./pitchClass')
note.setOctave = require('./setOctave')

note.enharmonics = require('./enharmonics')
note.transpose = require('./transpose')
note.distance = require('./distance')

module.exports = note
