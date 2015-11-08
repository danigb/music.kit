var vows = require('vows')
var assert = require('assert')
var height = require('../lib/pitch.height')

vows.describe('pitch.height').addBatch({
  'notes': function () {
    assert.deepEqual('c0 d0 e0 f0 g0 a0 b0'.split(' ').map(height),
      [0, 2, 4, 5, 7, 9, 11])
    assert.deepEqual('c1 d1 e1 f1 g1 a1 b1'.split(' ').map(height),
      [12, 14, 16, 17, 19, 21, 23])
    assert.deepEqual('c2 d2 e2 f2 g2 a2 b2'.split(' ').map(height),
      [24, 26, 28, 29, 31, 33, 35])
  },
  'pitch sets': function () {
    assert.deepEqual('c d e f g a b'.split(' ').map(height),
      [0 - 120, 2 - 120, 4 - 120, 5 - 120, 7 - 120, 9 - 120, 11 - 120])
  },
  'intervals': function () {
    assert.equal(height([0, 0]), 0)
    assert.equal(height([0, 1]), 12)
    assert.equal(height([1, 0]), 7)
    assert.equal(height([1, 1]), 19)
  },
  'invalid values': function () {
    assert.equal(height(null), -Infinity)
    assert.equal(height('blah'), -Infinity)
  }
}).export(module)
