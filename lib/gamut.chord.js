var harmonics = require('./gamut.harmonics')
var transpose = require('./note.transpose')

/**
 * @name chord
 *
 */
module.exports = function (notes, tonic) {
  var h = harmonics(notes)
  return h.map(transpose(tonic))
}
