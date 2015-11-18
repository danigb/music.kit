'use strict'

/**
 * In music.kit a pitch it's a note, an interval or a pitch class. It allows us
 * to work with this elements in an uniform way.
 *
 * All the function in this module are valid for notes, or intervals
 *
 * @name pitch
 *
 * @example
 * var pitch = require('music.kit').pitch
 * pitch.height('C2') // => 24
 * pitch.height('5P') // => 7
 */
module.exports = {
  parse: require('./parse'),
  str: require('./str'),
  simplify: require('./simplify'),
  height: require('./height'),
  operation: require('./operation')
}
