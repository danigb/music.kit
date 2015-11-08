var vows = require('vows')
var assert = require('assert')
var split = require('../lib/gamut.split')

vows.describe('gamut.split').addBatch({
  'gamut split': function () {
    assert.deepEqual(split('W |   X    Y  ,  Z '), ['W', 'X', 'Y', 'Z'])
    assert.deepEqual(split('  A '), ['A'])
    assert.deepEqual(split(['A', 'b']), ['A', 'b'])
    assert.deepEqual(split(32), [ 32 ])
    assert.deepEqual(split(), [])
    assert.deepEqual(split(null), [])
  }
}).export(module)
