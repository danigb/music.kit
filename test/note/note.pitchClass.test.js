var vows = require('vows')
var assert = require('assert')
var pitchClass = require('../../lib/note/pitchClass')

vows.describe('note.pitchClass').addBatch({
  'note pitch class': function () {
    assert.equal(pitchClass('c#2'), 'C#')
    assert.equal(pitchClass('fx/4'), 'F##')
  },
  'array notation': function () {
    assert.deepEqual(pitchClass([1, 2, 0]), [1])
  }
}).export(module)
