var vows = require('vows')
var assert = require('assert')
var type = require('../../lib/chord/type')

vows.describe('music.chord.type').addBatch({
  'major chord type': function () {
    assert.equal(type('C E G'), 'M')
    assert.equal(type('D F# A C#'.split(' ')), 'M')
  },
  'minor chord type': function () {
    assert.equal(type('E G B'), 'm')
    assert.equal(type('E G B D'), 'm')
    assert.equal(type('E G B D#'), 'm')
  },
  'augmented chord type': function () {
    assert.equal(type('C E G#'), 'aug')
    assert.equal(type('C E Ab'), null)
  },
  'dominant chord type': function () {
    assert.equal(type('G B D F'), '7')
    assert.equal(type('A C# E G'), '7')
  },
  'diminished chord type': function () {
    assert.equal(type('B D F'), 'dim')
    assert.equal(type('B D F A'), 'dim')
    assert.equal(type('B D F Ab'), 'dim')
  },
  'invalid chord types': function () {
    assert.equal(type(), null)
    assert.equal(type('C D E'), null)
  }
}).export(module)
