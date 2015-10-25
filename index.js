'use strict'

var music = {}

music.notation = require('music.notation')
music.note = require('music.note.height')
// music.note.enharmonics = require('music.note.enharmonics')
// music.transpose = require('music.transpose')
// music.interval = require('music.interval')
music.gamut = require('music.gamut')
music.pitchSet = require('music.pitchset')
music.scale = require('music.scale')
music.chord = require('music.chord')

module.exports = music
