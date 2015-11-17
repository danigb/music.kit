var vows = require('vows')
var assert = require('assert')
var chords = require('../../lib/scale/chords')

vows.describe('scale.chords').addBatch({
  'chords of major': function () {
    assert.deepEqual(chords('c d e f g a b'),
      [ 'C', 'Dm', 'Em', 'F', 'G7', 'Am', 'Bo' ])
  }
}).export(module)
