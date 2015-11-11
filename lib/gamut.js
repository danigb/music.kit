'use strict'

/**
 * In music.kit a gamut is a collection of intervals, pitch classes or notes.
 * Scales, chords, pitch sets are examples of gamuts.
 *
 * @name gamut
 */
module.exports = {
  sort: require('./gamut/sort'),
  harmonics: require('./gamut/harmonics'),
  operation: require('./gamut/operation'),
  split: require('./gamut/split'),
  rotate: require('./gamut/rotate'),
  select: require('./gamut/select')
}
