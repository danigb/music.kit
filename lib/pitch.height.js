'use strict'

var operation = require('./pitch.operation')

/**
 * @name pitch.height
 *
 * @function
 * @param {String|Array} pitch - the pitch to get the height from
 * @return {Integer} the height of -1 if not valid note
 */
module.exports = operation(function (p) {
  if (!Array.isArray(p)) return -1
  var f = p[0] * 7
  var o = p[1] || p[1] === 0 ? p[1] : -Math.floor(f / 12) - 10
  return f + o * 12
})
