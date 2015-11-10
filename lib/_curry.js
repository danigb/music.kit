'use strict'

/*
 * Curry a function with two parameters only
 * @private
 */
module.exports = function (fn) {
  return function (a, b) {
    if (arguments.length === 1) return function (c) { return fn(a, c) }
    return fn(a, b)
  }
}
