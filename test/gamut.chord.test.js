var vows = require('vows')
var assert = require('assert')
var chord = require('../lib/gamut.chord')

vows.describe('gamut.chord').addBatch({
  'basic': function () {
    assert.deepEqual(chord('C2 E2 G2', 'A4'), ['A4', 'C#5', 'E5'])
  }
}).export(module)
