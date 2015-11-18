var vows = require('vows')
var assert = require('assert')
var pitch = require('../..').pitch

vows.describe('pitch.pitch').addBatch({
  'notes': function () {
    assert.equal(pitch('c2'), 'C2')
  },
  'intervals': function () {
    assert.equal(pitch('2'), '2M')
  },
  'invalid': function () {
    assert.equal(pitch('blah'), null)
    assert.equal(pitch(null), null)
    assert.equal(pitch(), null)
  }
}).export(module)
