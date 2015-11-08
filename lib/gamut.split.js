var SEP = /\s*\|\s*|\s*,\s*|\s+/
/**
 * Convert a source to an array
 *
 * The source can be an array (it will return it without modification), a
 * string with elements separated by spaces, commas or bars (`|`) or a single
 * element (it will be wrapped inside an array)
 *
 * This function __does not perform any transformation__ of the array elements.
 * and __it always return an array, even if its empty__.
 *
 * @name split
 * @function
 * @param {String|Array} source - the source
 * @return {Array} the source as array
 */
module.exports = function (source) {
  if (Array.isArray(source)) return source
  else if (typeof source === 'string') return source.trim().split(SEP)
  else if (source === null || typeof source === 'undefined') return []
  else return [ source ]
}
