'use strict'

/**
 * In music.kit a gamut is a collection of intervals, pitch classes or notes.
 * Scales, chords, pitch sets are examples of gamuts.
 *
 * @name gamut
 */
module.exports = {
  sort: require('./gamut/sort'),
  chord: require('./gamut/chord'),
  harmonics: require('./gamut/harmonics'),
  operation: require('./gamut/operation'),
  scale: require('./gamut/scale'),
  set: require('./gamut/set'),
  split: require('./gamut/split'),
  rotate: require('./gamut/rotate'),
  select: require('./gamut/select')
}
