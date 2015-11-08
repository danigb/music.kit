var vows = require('vows')
var assert = require('assert')
var scale = require('../lib/gamut.scale')

vows.describe('gamut.scale').addBatch({
  'notes': function () {
    assert.deepEqual(scale('C2 D2 E2 G2 A2', false), ['1P', '2M', '3M', '5P', '6M'])
  },
  'pitch classes': function () {
    assert.deepEqual(scale('c d e f g a b c', false),
      ['1P', '2M', '3M', '4P', '5P', '6M', '7M'])
    assert.deepEqual(scale('d e f g a b c d', false),
      ['1P', '2M', '3m', '4P', '5P', '6M', '7m'])
  }
}).export(module)
