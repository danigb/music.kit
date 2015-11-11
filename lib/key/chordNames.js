var modes = require('../set/modes')
var select = require('../gamut/select')
var scale = require('../scale/get')
var names = require('../scale/names')

var name = function (n) { return names(n)[0] }
/**
 * Get chord names of a key
 *
 * EXPERIMENTAL
 *
 * @name key.chordNames
 */
module.exports = function (key) {
  var rot = modes(scale(key, false))
  // console.log(rot)
  var chords = rot.map(select('1 3 5 7'))
  // console.log(chords)
  chords.map(name)
}
