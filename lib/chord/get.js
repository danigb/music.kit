'use strict'

var chords = require('./dictionary')

module.exports = function (name) {
  return chords[name]
}
