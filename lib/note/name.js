'use strict'
var parse = require('./parse')
var str = require('./str')

/**
 * Get note name (or null if not valid note)
 *
 * @name note.name
 * @function
 * @param {String|Array} note - the note
 * @return {String} the note name in scientific notation
 *
 * @example
 * name = require('music.kit/note/name')
 * name('fx2') // => 'F##2'
 * name('bbb') // => 'Bbb'
 * name('blah') // => null
 */
module.exports = function (n) {
  return str(parse(n))
}
