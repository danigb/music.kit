var vows = require('vows')
var assert = require('assert')
var harmonics = require('../lib/gamut.harmonics')

vows.describe('gamut.harmonics').addBatch({
  'simple': function () {
    assert.deepEqual(harmonics('c2 d2 e2 f2 g2'),
      ['1P', '2M', '3M', '4P', '5P'])
  },
  'pitch classes': function () {
    assert.deepEqual(harmonics('c d e f g a b c'),
      ['1P', '2M', '3M', '4P', '5P', '6M', '7M', '1P'])
    assert.deepEqual(harmonics('d e f g a b c d'),
      ['1P', '2M', '3m', '4P', '5P', '6M', '-2M', '1P'])
  }
}).export(module)
