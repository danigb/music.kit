var vows = require('vows')
var assert = require('assert')
var setOctave = require('../lib/note.setOctave')
var note = require('../lib/note.str')

function pitchClasses (str) { return str.split('').map(function (i) { return [ +i ] }) }

vows.describe('pitch.setOctave').addBatch({
  'basic': function () {
    assert.equal(setOctave(0, 'C2'), 'C0')
    assert.equal(setOctave(0, 'c#2'), 'C#0')
  },
  'array notation': function () {
    assert.deepEqual(setOctave(0, [1]), [1, 0, null])
  },
  'partial': function () {
    assert.deepEqual('C5 D6 E2 F2 G-1 A8 B1'.split(' ').map(setOctave(1)),
      ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'])
    assert.deepEqual('c#1 db3 f#7 ab8'.split(' ').map(setOctave(2)),
      ['C#2', 'Db2', 'F#2', 'Ab2'])
    assert.deepEqual(pitchClasses('0123456').map(setOctave(0)).map(note),
      ['C0', 'G0', 'D0', 'A0', 'E0', 'B0', 'F#0'])
  },
  'invalid pitch': function () {
    assert.equal(setOctave(0, 'Blah'), null)
  }
}).export(module)
