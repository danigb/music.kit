'use strict'

var operation = require('./gamut.operation')
var set = require('./gamut.set')
var harmonics = require('./gamut.harmonics')
var height = require('./pitch.height')

/**
 * Get a set binary number
 *
 * A set binary number is a 12 digit binary, each digit representing a step
 * in the chromatic scale. For example, `101010000000` is `['1P', '2M', '3M']`
 *
 * The set binary number is very useful to check if two sets are equal or
 * contains same intervals (regarding of note names)
 *
 * @name gamut.binarySet
 * @function
 * @param {String|Array|Array<Array>} source - a gamut
 * @return {String} the binary number
 *
 * @example
 * var binarySet = require('music.kit/gamut.binarySet')
 * binarySet('C2 E4 D3') // => '101010000000'
 */
module.exports = operation(function (gamut) {
  var number = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  var intervals = set(harmonics(gamut))
  var semitones = intervals.map(height)
  semitones.forEach(function (s) {
    number[s] = 1
  })
  return number.join('')
})
