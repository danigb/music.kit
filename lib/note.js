'use strict'

/**
 * In music.kit a note is represented by string, usually in scientific notation.
 *
 * The note module provides functions to manipulate notes:
 *
 * - Scientific notation: `note.parse` and `note.str`
 * - Midi and frequencies: `note.midi`, `note.freq`, `note.fromMidi`
 * - Note properties: `note.pitchClass`, `note.setOctave`
 * - Enharmonics: `note.enharmonics`
 * - Transposition and distances: `note.transpose`, `note.distance`
 */
var note = require('./note/build')

note.midi = require('./note/midi')
note.fromMidi = require('./note/fromMidi')
note.freq = require('./note/freq')

// manipulation
note.pitchClass = require('./note/pitchClass')
note.setOctave = require('./note/setOctave')

note.enharmonics = require('./note/enharmonics')
note.transpose = require('./note/transpose')
note.distance = require('./note/distance')

module.exports = note
