
/**
 * In music.kit an scale is a set of notes or intervals with a tonic and ordered
 * by pitch
 *
 * The `scale` module has functions to create and manipulate scales
 */
var scale = require('./scale/build')
scale.select = require('./scale/select')
scale.modes = require('./scale/modes')
scale.get = require('./scale/get')
scale.names = require('./scale/names')

module.exports = scale
