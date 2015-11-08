'use strict'

var height = require('./pitch.height')
var operation = require('./gamut.operation')

/**
 * @name ascending
 *
 * @function
 */
module.exports = operation(function (gamut) {
  return gamut.sort(function (a, b) {
    return height(a) - height(b)
  })
})
