var vows = require('vows')
var assert = require('assert')
var midi = require('../../lib/note/midi')

vows.describe('music.note.midi').addBatch({
  'note to midi': function () {
    assert.deepEqual('C4 D4 E4 F4 G4 A4 B4 C4'.split(' ').map(midi), [60, 62, 64, 65, 67, 69, 71, 60])
    assert.deepEqual('C#4 D#4 E#4 F#4 G#4 A#4 B#4 C#4'.split(' ').map(midi), [61, 63, 65, 66, 68, 70, 72, 61])
    assert.deepEqual('C##4 D##4 E##4 F##4 G##4 A##4 B##4 C##4'.split(' ').map(midi), [62, 64, 66, 67, 69, 71, 73, 62])
    assert.deepEqual('Cb4 Db4 Eb4 Fb4 Gb4 Ab4 Bb4 Cb4'.split(' ').map(midi), [59, 61, 63, 64, 66, 68, 70, 59])
    assert.deepEqual('Cbb3 Dbb3 Ebb3 Fbb3 Gbb3 Abb3 Bbb3 Cbb3'.split(' ').map(midi), [46, 48, 50, 51, 53, 55, 57, 46])
  },
  'array notation': function () {
    assert.equal(midi([0, 2]), 36)
    assert.equal(midi([0, 2, null]), 36)
    assert.equal(midi([0, 2, 5]), 36)
    assert.equal(midi([4]), null)
  },
  'note class does not have midi': function () {
    assert.deepEqual('C D E F G A B C'.split(' ').map(midi), [ null, null, null, null, null, null, null, null ])
  },
  'enharmonic test': function () {
    assert.equal(midi('B#3'), midi('C4'))
    assert.equal(midi('B##3'), midi('Db4'))
  },
  'invalid notes': function () {
    assert.equal(midi('blah'), null)
  }
}).export(module)
