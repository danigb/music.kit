'use strict'

/**
 * music.kit is a compact library to manipulate music abstractions (not actual music)
 * and while its designed to create algorithmic composition programs,
 * can be use to develop any kind of midi or audio software.
 *
 * @name music.kit
 */
var kit = {}
kit.notation = require('./notation/index')
kit.note = require('./note/index')
kit.transpose = kit.note.transpose
kit.pitch = require('./pitch/index')
kit.interval = require('./interval/index')
kit.gamut = require('./gamut/index')
kit.set = require('./set/index')
kit.scale = require('./scale/index')
kit.chord = require('./chord/index')
kit.dictionary = require('./dictionary/index')

if (typeof module === 'object' && module.exports) module.exports = kit
if (typeof window !== 'undefined') window.kit = kit
