'use strict'

var parse = require('../notation/ntc')
var str = require('../notation/ctn')

/**
 * Get note name (or null if not valid note)
 *
 * @name note.build
 * @function
 * @param {String|Array} note - the note
 * @return {String} the note build in scientific notation
 *
 * @example
 * build = require('music.kit/note/build')
 * build('fx2') // => 'F##2'
 * build('bbb') // => 'Bbb'
 * build('blah') // => null
 */
module.exports = function (n) {
  return str(parse(n))
}
