'use strict'

var data = require('./data/scales.json')
var binary = require('./gamut.binarySet')
var split = require('./gamut.split')
var scales = require('./data/scales')

/**
 * Given a list of notes get the scale names
 *
 * @name scale.names
 * @function
 * @param {String|Array} notes - the scale notes
 * @return {Array} an array of scale names or all known scale names if no arguments provided
 *
 * @example
 * // get all known scale names
 * scale.names() // => ['major', 'minor', ... ] (89 names)
 * scale.names('D E F G A B C') [ 'D dorian' ]
 * scale.names('D E F G A B C') [ 'D dorian' ]
 */
module.exports = function (notes) {
  if (arguments.length === 0) return Object.keys(data)
  var s = scales[binary(notes)]
  if (!s) return []
  var tonic = split(notes)[0]
  return [ s.name ].concat(s.aliases).map(function (name) {
    return tonic + ' ' + name
  })
}
