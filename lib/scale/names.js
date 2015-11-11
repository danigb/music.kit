'use strict'

var data = require('./scales.json')
var names = require('../dictionary/names')
var scales = require('./dictionary')

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
module.exports = names(Object.keys(data), scales, ' ')
