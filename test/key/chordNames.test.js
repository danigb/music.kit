var vows = require('vows')
var assert = require('assert')
var names = require('../../lib/key/chordNames')

vows.describe('music.key.chordNames').addBatch({
  'major': function () {
    assert.deepEqual(names('major'))
  }
}).export(module)
