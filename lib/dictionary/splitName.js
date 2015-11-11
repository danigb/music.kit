'use strict'

var note = require('../note/name')
var NAME = /^([a-gA-G#x\d]+)\s*(.*)$/

/**
 * Split the name of named set in type and tonic (if present)
 *
 * @name dictionary.name
 * @function
 * @private
 * @param {String} name - the name
 * @return {Array} an array with the type and the tonic (if present)
 */
module.exports = function (name) {
  var m = NAME.exec(name)
  if (m && note(m[1])) return [m[2], note(m[1])]
  return [ name ]
}
