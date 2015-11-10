var vows = require('vows')
var assert = require('assert')
var rotations = require('../../lib/gamut/rotations')

vows.describe('gamut.rotations').addBatch({
  'rotations': function () {
    assert.deepEqual(rotations('C d E'), [
      [ 'C', 'd', 'E' ],
      [ 'd', 'E', 'C' ],
      [ 'E', 'C', 'd' ]
    ])
  }
}).export(module)
