var bn = require('./note.build')
var bi = require('./interval.build')

/**
 * @name build
 */
module.exports = function (n) { return bn(n) || bi(n) }
