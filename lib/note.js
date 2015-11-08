'use strict'

module.exports = {
  parse: require('./note.parse'),
  build: require('./note.str'),
  distance: require('./note.distance'),
  pitchClass: require('./note.pitchClass'),
  setOctave: require('./note.setOctave'),
  transpose: require('./note.transpose')
}
