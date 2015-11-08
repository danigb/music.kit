var vows = require('vows')
var assert = require('assert')
var transpose = require('../lib/note.transpose')

vows.describe('note.transpose').addBatch({
  'orden of parameters': function () {
    assert.equal(transpose('2M', 'E2'), 'F#2')
    assert.equal(transpose('E2', '2M'), 'F#2')
  },
  'interval false': function () {
    assert.equal(transpose(false, 'e2'), 'E2')
  },
  'curry': function () {
    assert.deepEqual('1 2 3b 4 5 6 7b'.split(' ').map(transpose('C2')),
      ['C2', 'D2', 'Eb2', 'F2', 'G2', 'A2', 'Bb2'])
    assert.deepEqual('C2 D2 E2 F2 G2 A2 B2'.split(' ').map(transpose('2M')),
      ['D2', 'E2', 'F#2', 'G2', 'A2', 'B2', 'C#3'])
  },
  'invalid values': function () {
    assert.equal(transpose(null, 'C2'), null)
    assert.equal(transpose('blah', 'C3'), null)
  }
}).export(module)
