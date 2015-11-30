'use strict'

/**
 * In music.kit a gamut is a collection of intervals, pitch classes or notes.
 * Scales, chords, pitch sets are examples of gamuts.
 *
 * @name gamut
 */
module.exports = {
  sort: require('./sort'),
  harmonics: require('./harmonics'),
  operation: require('./operation'),
  split: require('./split'),
  rotate: require('./rotate'),
  select: require('./select')
}
