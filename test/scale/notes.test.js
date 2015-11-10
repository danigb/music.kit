var vows = require('vows')
var assert = require('assert')
var notes = require('../../lib/chord/notes')

vows.describe('music.chord.notes').addBatch({
  'get notes': function () {
    assert.deepEqual(notes('Maj7', 'C'), [ 'C', 'E', 'G', 'B' ])
  },
  'partial': function () {
    assert.deepEqual(notes('Maj7')('C'), [ 'C', 'E', 'G', 'B' ])
  }
}).export(module)
