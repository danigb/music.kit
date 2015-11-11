var vows = require('vows')
var assert = require('assert')
var names = require('../../lib/scale/names')

vows.describe('scale.names').addBatch({
  'all names': function () {
    assert.equal(names().length, 89)
  },
  'by notes': function () {
    assert.deepEqual(names('C D E F G A B C'), ['C major', 'C ionian'])
    assert.deepEqual(names('D E F G A B C'), ['D dorian'])
  },
  'with aliases': function () {
    assert.deepEqual(names('G A B C D E F G'), [ 'G mixolydian', 'G dominant' ])
  }
}).export(module)
