'use strict'

var curry = require('../_curry')
var dictionary = require('./dictionary')
var transpose = require('../note/transpose')

/**
 * Get scale notes from a scale type and a tonic
 *
 * @name scale.notes
 * @function
 * @param {String} type - the scale type
 * @param {String} tonic - the tonic
 * @return {Array} the scale notes
 */
module.exports = curry(function (type, tonic) {
  return type in dictionary ? dictionary[type].intervals.map(transpose(tonic)) : []
})
