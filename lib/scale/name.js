'use strict'

var names = require('./names')

module.exports = function (notes) {
  var n = names(notes)
  return n.length ? n[0] : null
}
