var vows = require('vows')
var assert = require('assert')
var splitName = require('../../lib/dictionary/splitName')

vows.describe('dictionary.splitName').addBatch({
  'no tonic': function () {
    assert.deepEqual(splitName('major'), ['major'])
    assert.deepEqual(splitName('n3 major'), ['n3 major'])
  },
  'with space': function () {
    assert.deepEqual(splitName('C major'), ['major', 'C'])
    assert.deepEqual(splitName('fx melodic minor'), ['melodic minor', 'F##'])
  },
  'with octave': function () {
    assert.deepEqual(splitName('c2 melodic minor'), ['melodic minor', 'C2'])
  },
  'chords': function () {
    assert.deepEqual(splitName('CbMaj7'), ['Maj7', 'Cb'])
    assert.deepEqual(splitName('f##Maj7'), ['Maj7', 'F##'])
  }
}).export(module)
