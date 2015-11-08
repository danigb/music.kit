'use strict'

module.exports = function (fn) {
  return function (a, b) {
    if (arguments.length === 1) return function (c) { return fn(a, c) }
    return fn(a, b)
  }
}
