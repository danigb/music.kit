'use strict'

var curry = require('../_curry')
var dictionary = require('./dictionary')
var transpose = require('../note/transpose')

/**
 * Get chord notes from a chord type and a tonic
 *
 * @name chord.notes
 * @function
 * @param {String} type - the chord type
 * @param {String} tonic - the tonic
 * @return {Array} the chord notes
 */
module.exports = curry(function (type, tonic) {
  return type in dictionary ? dictionary[type].intervals.map(transpose(tonic)) : []
})
