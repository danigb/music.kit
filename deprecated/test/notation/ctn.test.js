var vows = require('vows')
var assert = require('assert')
var parse = require('../../lib/notation/ntc')
var build = require('../../lib/notation/ctn')

function test (notes) {
  var expected = notes.split(' ')
  var actual = expected.map(parse).map(build)
  assert.deepEqual(actual, expected)
}

vows.describe('ctn').addBatch({
  'pitch classes': function () {
    test('C D E F G A B')
    test('C# D# E# F# G# A# B#')
    test('C## D## E## F## G## A## B##')
    test('Cb Db Eb Fb Gb Ab Bb')
  },
  'pitches': function () {
    test('C0 D0 E0 F0 G0 A0 B0')
    test('Cb1 Db1 Eb1 Fb1 Gb1 Ab1 Bb1')
    test('C#2 D#2 E#2 F#2 G#2 A#2 B#2')
    test('C-1 D-1 E-1 F-1 G-1 A-1 B-1')
  },
  'durations': function () {
    test('C0/1 D0/2 E0/4 F0/8 G0/16 A0/32 B0/64')
  },
  'invalid arrays': function () {
    assert.equal(build(null), null)
    assert.equal(build('C2'), null)
    assert.equal(build(3), null)
    assert.equal(build({}), null)
    assert.equal(build([]), null)
  }
}).export(module)
