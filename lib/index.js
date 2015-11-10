'use strict'

/**
 * music.kit is a compact library to manipulate music abstractions (not actual music)
 * and while its designed to create algorithmic composition programs,
 * can be use to develop any kind of midi or audio software.
 *
 * @name music.kit
 */
var kit = {}
kit.note = require('./note')
kit.pitch = require('./pitch')
kit.interval = require('./interval')
kit.gamut = require('./gamut')
kit.set = require('./set')
kit.scale = require('./scale')
kit.chord = require('./chord')

module.exports = kit
