var toCoord = require('./toCoord')
var fromCoord = require('./fromCoord')

/**
 * Decorate a function to work with pitches in coord notation
 *
 * @name pitch.operation
 * @function
 */
module.exports = function (fn) {
  return function (a, b) {
    var ac = toCoord(a)
    var bc = toCoord(b)
    if (!ac && !bc) return fn(a, b)
    var v = fn(ac || a, bc || b)
    return fromCoord(v) || v
  }
}
