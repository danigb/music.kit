var vows = require('vows')
var assert = require('assert')
var notes = require('../../lib/scale/notes')

vows.describe('music.scale.notes').addBatch({
  'get notes': function () {
    assert.deepEqual(notes('major', 'C'), [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ])
  },
  'partial': function () {
    assert.deepEqual(notes('major')('C'), [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ])
  }
}).export(module)
