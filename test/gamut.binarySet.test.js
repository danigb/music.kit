var vows = require('vows')
var assert = require('assert')
var binarySet = require('../lib/gamut.binarySet')

vows.describe('gamut.binarySet').addBatch({
  'get binary set': function () {
    assert.equal(binarySet('C D e f#').length, 12)
    assert.equal(binarySet('C D e f#'), '101010100000')
    assert.equal(binarySet('c d e f g a b'), '101011010101')
    assert.equal(binarySet('c d e f g a b c d e f'), '101011010101')
  }
}).export(module)
