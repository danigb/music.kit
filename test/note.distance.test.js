var vows = require('vows')
var assert = require('assert')
var distance = require('../lib/note.distance')

vows.describe('note.distance').addBatch({
  'basic': function () {
    assert.equal(distance('C2', 'D2'), '2M')
  },
  'pitch classes': function () {
    assert.equal(distance('C', 'D'), null)
    assert.equal(distance('C', 'D2'), null)
    assert.equal(distance('C2', 'D'), null)
  },
  'curry': function () {
    assert.deepEqual('C2 D2 E2 F2 G2 A2 B2 C3'.split(' ').map(distance('C2')),
      ['1P', '2M', '3M', '4P', '5P', '6M', '7M', '8P'])
  },
  'invalid values': function () {
    assert.equal(distance(null, 'C2'), null)
    assert.equal(distance('blah', 'C3'), null)
  }
}).export(module)
