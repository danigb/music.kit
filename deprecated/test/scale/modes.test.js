var vows = require('vows')
var assert = require('assert')
var modes = require('../../lib/scale/modes')

vows.describe('scale.modes').addBatch({
  'major': function () {
    assert.deepEqual(modes('c d a b g f d C e'), [
      [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ],
      [ 'D', 'E', 'F', 'G', 'A', 'B', 'C' ],
      [ 'E', 'F', 'G', 'A', 'B', 'C', 'D' ],
      [ 'F', 'G', 'A', 'B', 'C', 'D', 'E' ],
      [ 'G', 'A', 'B', 'C', 'D', 'E', 'F' ],
      [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ],
      [ 'B', 'C', 'D', 'E', 'F', 'G', 'A' ]])
    assert.deepEqual(modes('bb c d eb f g'), [
      [ 'Bb', 'C', 'D', 'Eb', 'F', 'G' ],
      [ 'C', 'D', 'Eb', 'F', 'G', 'Bb' ],
      [ 'D', 'Eb', 'F', 'G', 'Bb', 'C' ],
      [ 'Eb', 'F', 'G', 'Bb', 'C', 'D' ],
      [ 'F', 'G', 'Bb', 'C', 'D', 'Eb' ],
      [ 'G', 'Bb', 'C', 'D', 'Eb', 'F' ]])
  }
}).export(module)
