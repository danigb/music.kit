
/**
 * In music.kit an scale is a set of notes or intervals with a tonic and ordered
 * by pitch
 *
 * The `scale` module has functions to create and manipulate scales
 */
var scale = require('./gamut/scale')
scale.pattern = require('./scale/pattern')
scale.get = require('./scale/get')
scale.names = require('./scale/names')
scale.notes = require('./scale/notes')

module.exports = scale
