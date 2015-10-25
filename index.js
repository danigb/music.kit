'use strict'

var music = {}

music.notation = require('music.notation')
music.note = require('music.note.height')
music.note.transpose = require('music.note.transpose')
// music.note.enharmonics = require('music.note.enharmonics')
// music.interval = require('music.interval')
music.gamut = require('music.gamut')
music.pitchSet = require('music.pitchset')
music.scale = require('music.scale')
music.scale.degrees = require('music.scale.degrees')
music.scales = require('music.scales')
music.chord = require('music.chord')

if (typeof module === 'object' && module.exports) module.exports = music
if (typeof window !== 'undefined') window.music = music
