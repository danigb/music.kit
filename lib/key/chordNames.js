var modes = require('../set/modes')
var select = require('../gamut/select')
var spell = require('../scale/spell')
var name = require('../scale/name')

/**
 * Get chord names of a key
 *
 * EXPERIMENTAL
 *
 * @name key.chordNames
 */
module.exports = function (key) {
  var rot = modes(spell(key, false))
  // console.log(rot)
  var chords = rot.map(select('1 3 5 7'))
  // console.log(chords)
  chords.map(name)
}
