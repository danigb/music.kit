'use strict'

var scales = require('./dictionary')
var transpose = require('../note/transpose')
var split = require('../namedSet/splitName')

/**
 * Get a scale by name using a dictionary.
 * @name scale.get
 * @function
 * @param {String} name - the scale name (optionally can include the tonic)
 * @return {Object} a data object with the scale properties
 *
 * @example
 */
function get (name, tonic) {
  var n = split(name)
  if (n.length === 2) return get(n[0], tonic || n[1])
  else if (arguments.length === 1) return function (t) { return get(name, t) }
  var i = scales[name].intervals
  return i ? i.map(transpose(tonic)) : []
}
module.exports = get
