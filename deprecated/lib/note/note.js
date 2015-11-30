'use strict'

var parse = require('../notation/ntc')
var str = require('../notation/ctn')

/**
 * Get a note from a string (or null if not valid note)
 *
 * @name note.note
 * @function
 * @param {String} src - the source
 * @return {String} the note in scientific notation
 *
 * @example
 * note = require('music.kit/note/note')
 * note('fx2') // => 'F##2'
 * note('bbb') // => 'Bbb'
 * note('blah') // => null
 */
module.exports = function (n) {
  return str(parse(n))
}
