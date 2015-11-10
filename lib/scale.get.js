'use strict'

var scales = require('./data/scales')
var transpose = require('./note.transpose')
var NONE = { name: null, intervals: [], aliases: [], binary: null, decimal: null }
var NAME = /^([^\s]+)\s(.*)$/

/**
 * Get a scale by name using a dictionary. It returns a data object with the
 * following properties:
 *
 * - name {String}: the name of the scale
 * - tonic {String}: the tonic of the scale or null if no tonic
 * - intervals {Array}: an array of scale intervals
 * - notes {Array}: an array of scale notes (if tonic) or empty array
 * - binary: intervals in a 12-digit binary number
 * - decimal: the decimal equivalent of the binary number
 *
 * @name scale.get
 * @function
 * @param {String} name - the scale name (optionally can include the tonic)
 * @return {Object} a data object with the scale properties
 *
 * @example
 * var getScale = require('music.kit/scale.get')
 * getScale('major') // => { name: 'major', aliases: [ 'ionian' ],
 * // binary: '101011010101', decimal: 2773, tonic: null, notes: [],
 * // intervals: [ '1', '2', '3', '4', '5', '6', '7' ] }
 * getScale('C major') // => { name: 'C major', aliases: [ 'C ionian' ],
 * // binary: '101011010101', decimal: 2773, tonic: 'C',
 * // notes: [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ],
 * // intervals: [ '1', '2', '3', '4', '5', '6', '7' ] }
 */
module.exports = function (name) {
  var m = NAME.exec(name)
  var tonic = m ? m[1] : null
  var type = (m ? m[2] : name.toString())
  type = type ? type.trim().toLowerCase() : type
  var def = scales[type]
  if (!def) return NONE
  var tonicify = function (t) { return tonic ? tonic + ' ' + t : t }
  return { name: tonicify(def.name), aliases: def.aliases.map(tonicify),
    binary: def.binary, decimal: def.decimal, intervals: def.intervals.slice(),
    tonic: tonic, notes: tonic ? def.intervals.map(transpose(tonic)) : [] }
}
