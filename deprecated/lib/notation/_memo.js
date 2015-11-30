'use strict'

/**
 * Simple and fast memoization decorator
 *
 * It asumes that only one parameter
 *
 * @name notation.memo
 * @function
 * @private
 */
module.exports = function (fn) {
  var cache = {}
  return function (str) {
    if (typeof str !== 'string') return null
    return (str in cache) ? cache[str] : cache[str] = fn(str)
  }
}
