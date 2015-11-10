var vows = require('vows')
var assert = require('assert')
var pattern = require('../lib/scale.pattern')

vows.describe('scale.pattern').addBatch({
  'get specified only': function () {
    assert.deepEqual(pattern('1 3 5', 'C D E F G A B'), [ 'C', 'E', 'G' ])
    assert.deepEqual(pattern('1 3 6', 'C D E F G B'), [ 'C', 'E', null ])
  },
  'different order': function () {
    assert.deepEqual(pattern('1 5 3', 'C D E F G A B'), [ 'C', 'G', 'E' ])
    assert.deepEqual(pattern('1 5 2 6', 'C D E F G A B'), [ 'C', 'G', 'D', 'A' ])
  },
  'higher than an octave': function () {
    assert.deepEqual(pattern('1 2 3', 'C2 D4 E5'), ['C2', 'D2', 'E2'])
    assert.deepEqual(pattern('1 2 8 9', 'C2 D4 E5'), ['C2', 'D2', 'C3', 'D3'])
    assert.deepEqual(pattern('1 8 15', 'C2 D4 E5'), ['C2', 'C3', 'C4'])
  },
  'partially applied': function () {
    var ptn = pattern('1 3 5 8 5 3 1')
    assert.deepEqual(ptn('c2 d e f g a b'), ['C2', 'E2', 'G2', 'C3', 'G2', 'E2', 'C2'])
  },
  'work with pitch-array format': function () {
    assert.deepEqual(pattern('1 3 5 8', [ [0, 0, 4], [1, 0, 4] ]),
      [ [0, 0, 4], null, [1, 0, 4], [0, 1, 4] ])
  }
}).export(module)
