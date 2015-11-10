'use strict'

var data = require('./data/scales.json')

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
 */
module.exports = function () {
  if (arguments.length === 0) return Object.keys(data)
}
